import {Component} from '@angular/core';
import {ImportService} from '../service/import.service';

interface FileStatus {
  name: string;
  status: 'pending' | 'error';
  message?: string;
}

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html'
})
export class ImportComponent {

  fileStatuses: FileStatus[] = [];
  loading: boolean = false;
  success: boolean = false;
  error: string | null = null;
  private selectedFiles: File[] = [];

  constructor(private importService: ImportService) {}

  get selectedCount(): number { return this.selectedFiles.length; }

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedFiles = Array.from(input.files ?? []);
    this.fileStatuses = this.selectedFiles.map(f => ({name: f.name, status: 'pending'}));
    this.success = false;
    this.error = null;
  }

  import() {
    if (!this.selectedFiles.length) return;

    this.loading = true;
    this.success = false;
    this.error = null;

    const readPromises = this.selectedFiles.map((file, i) =>
      new Promise<unknown>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            resolve(JSON.parse(reader.result as string));
          } catch {
            this.fileStatuses[i].status = 'error';
            this.fileStatuses[i].message = 'Invalid JSON.';
            reject();
          }
        };
        reader.onerror = () => reject();
        reader.readAsText(file);
      })
    );

    Promise.allSettled(readPromises).then(results => {
      const payloads = results
        .filter(r => r.status === 'fulfilled')
        .map(r => (r as PromiseFulfilledResult<unknown>).value);

      if (!payloads.length) {
        this.error = 'No valid JSON files to import.';
        this.loading = false;
        return;
      }

      this.importService.importJson(payloads).subscribe({
        next: () => {
          this.success = true;
          this.loading = false;
        },
        error: () => {
          this.error = 'Import failed. The server rejected the request.';
          this.loading = false;
        }
      });
    });
  }
}
