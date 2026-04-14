import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CharacterService } from './character-service';
import { ServerConstants } from '../server-constants';

describe('CharacterService', () => {
  let service: CharacterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CharacterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET all characters', () => {
    service.getCharacter().subscribe(characters => {
      expect(characters).toEqual([]);
    });
    const req = httpMock.expectOne(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'character');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should POST a new character', () => {
    const newChar = { name: 'Test', characterClass: 'Warrior', server: 'PEQ' };
    service.addCharacter(newChar).subscribe(result => {
      expect(result).toBeTruthy();
    });
    const req = httpMock.expectOne(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'character/1');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newChar);
    req.flush({ id: 1, ...newChar });
  });
});
