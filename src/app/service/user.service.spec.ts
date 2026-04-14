import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { ServerConstants } from '../server-constants';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET all users', () => {
    service.getUsers().subscribe(users => {
      expect(users).toEqual([]);
    });
    const req = httpMock.expectOne(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'user');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });
});
