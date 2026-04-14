import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Epic15Service } from './epic1-5.service';
import { ServerConstants } from '../server-constants';

describe('Epic15Service', () => {
  let service: Epic15Service;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(Epic15Service);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET all Epic 1.5 quests', () => {
    service.getAllEpic15().subscribe(quests => {
      expect(quests).toEqual([]);
    });
    const req = httpMock.expectOne(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'epic-1-5');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });
});
