import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';
import { CharacterEquipArmorSlotService } from './character-equip-armor-slot.service';
import { ServerConstants } from '../server-constants';

describe('CharacterEquipArmorSlotService', () => {
  let service: CharacterEquipArmorSlotService;
  let httpMock: HttpTestingController;
  const baseUrl = ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'character-equipped-items/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CharacterEquipArmorSlotService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET all armor equip slots', () => {
    service.getAllArmorEquipSlots().subscribe(slots => {
      expect(slots).toEqual([]);
    });
    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should GET armor equip slots by class and slot with params', () => {
    const params = new HttpParams().set('classes', 'Warrior').set('slots', 'Head');
    service.getAllArmorEquipSlotsByClassAndSlot(params).subscribe(slots => {
      expect(slots).toEqual([]);
    });
    const req = httpMock.expectOne(r => r.url === baseUrl + 'search');
    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('classes')).toBe('Warrior');
    req.flush([]);
  });
});
