import { TestBed } from '@angular/core/testing';

import { CharacterEquipArmorSlotService } from './character-equip-armor-slot.service';

describe('CharacterEquipArmorSlotService', () => {
  let service: CharacterEquipArmorSlotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterEquipArmorSlotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
