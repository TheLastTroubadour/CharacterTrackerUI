import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tier5QuestTrackerComponent } from './tier5-quest-tracker.component';

describe('Tier5QuestTrackerComponent', () => {
  let component: Tier5QuestTrackerComponent;
  let fixture: ComponentFixture<Tier5QuestTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tier5QuestTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tier5QuestTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
