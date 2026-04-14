import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Tier5QuestTrackerService } from './tier5-quest-tracker.service';
import { ServerConstants } from '../server-constants';

describe('Tier5QuestTrackerService', () => {
  let service: Tier5QuestTrackerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(Tier5QuestTrackerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET all Xegony Key quests', () => {
    service.getAllXegonyKeyQuests().subscribe(quests => {
      expect(quests).toEqual([]);
    });
    const req = httpMock.expectOne(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'tier-5/xegony-keys');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should GET all PoA Augment quests', () => {
    service.getAllPoAAugmentQuests().subscribe(quests => {
      expect(quests).toEqual([]);
    });
    const req = httpMock.expectOne(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'tier-5/poa-augments');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });
});
