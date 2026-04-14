import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Epic15trackerComponent } from './epic15tracker.component';
import { Epic15Service } from '../service/epic1-5.service';

describe('Epic15trackerComponent', () => {
  let component: Epic15trackerComponent;
  let fixture: ComponentFixture<Epic15trackerComponent>;
  let mockEpic15Service: jasmine.SpyObj<Epic15Service>;

  beforeEach(async () => {
    mockEpic15Service = jasmine.createSpyObj('Epic15Service', { getAllEpic15: of([]) });

    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [Epic15trackerComponent],
      providers: [
        { provide: Epic15Service, useValue: mockEpic15Service },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Epic15trackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load quests on init', () => {
    expect(mockEpic15Service.getAllEpic15).toHaveBeenCalled();
  });

  it('should show empty state when no quests returned', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('No Epic 1.5 quests found.');
  });
});
