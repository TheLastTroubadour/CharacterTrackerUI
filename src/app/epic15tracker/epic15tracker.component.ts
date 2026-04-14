import {Component, OnInit} from '@angular/core';
import {Epic15Quest} from "../model/epic1-5-quest";
import {Epic15Service} from "../service/epic1-5.service";
import {Observable, catchError, of} from "rxjs";

@Component({
  selector: 'app-epic15tracker',
  templateUrl: './epic15tracker.component.html',
  styleUrls: ['./epic15tracker.component.css']
})
export class Epic15trackerComponent implements OnInit{
  epic1_5Quests$: Observable<Epic15Quest[]> = new Observable();
  error: string | null = null;

  constructor(private epic15Service: Epic15Service) {
  }

  ngOnInit(): void {
    this.epic1_5Quests$ = this.epic15Service.getAllEpic15().pipe(
      catchError(() => {
        this.error = 'Failed to load Epic 1.5 quests.';
        return of([]);
      })
    );
  }
}
