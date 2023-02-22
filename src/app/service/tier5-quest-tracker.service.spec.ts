import { TestBed } from '@angular/core/testing';

import { Tier5QuestTrackerService } from './tier5-quest-tracker.service';

describe('Tier5QuestTrackerService', () => {
  let service: Tier5QuestTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tier5QuestTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
