import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Tier5QuestTrackerComponent } from './tier5-quest-tracker.component';
import { Tier5QuestTrackerService } from '../service/tier5-quest-tracker.service';

describe('Tier5QuestTrackerComponent', () => {
  let component: Tier5QuestTrackerComponent;
  let fixture: ComponentFixture<Tier5QuestTrackerComponent>;
  let mockTier5Service: jasmine.SpyObj<Tier5QuestTrackerService>;

  beforeEach(async () => {
    mockTier5Service = jasmine.createSpyObj('Tier5QuestTrackerService', {
      getAllXegonyKeyQuests: of([]),
      getAllPoAAugmentQuests: of([]),
    });

    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [Tier5QuestTrackerComponent],
      providers: [
        { provide: Tier5QuestTrackerService, useValue: mockTier5Service },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Tier5QuestTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load both quest types on init', () => {
    expect(mockTier5Service.getAllXegonyKeyQuests).toHaveBeenCalled();
    expect(mockTier5Service.getAllPoAAugmentQuests).toHaveBeenCalled();
  });

  it('should show empty states when no quests returned', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('No Xegony Key quests found.');
    expect(compiled.textContent).toContain('No PoA Augment quests found.');
  });
});
