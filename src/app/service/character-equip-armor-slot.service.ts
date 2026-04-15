import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ServerConstants} from '../server-constants';
import {Observable} from 'rxjs';
import {CharacterEquipArmorSlot} from '../model/character-equip-armor-slot';

@Injectable({
  providedIn: 'root'
})
export class CharacterEquipArmorSlotService {

  private ceasUrl = ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'character-equipped-items/';

  constructor(private http: HttpClient) {}

  getAllArmorEquipSlots(): Observable<CharacterEquipArmorSlot[]> {
    return this.http.get<CharacterEquipArmorSlot[]>(this.ceasUrl);
  }

  getAllArmorEquipSlotsByClassAndSlot(params: HttpParams): Observable<CharacterEquipArmorSlot[]> {
    return this.http.get<CharacterEquipArmorSlot[]>(this.ceasUrl + 'search', {params});
  }
}
