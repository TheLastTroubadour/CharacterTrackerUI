import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServerConstants} from '../server-constants';
import {Character} from '../model/character';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) {}

  getCharacter(): Observable<Character[]> {
    return this.http.get<Character[]>(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'character');
  }

  addCharacter(character: Pick<Character, 'name' | 'characterClass' | 'server'>): Observable<Character> {
    return this.http.post<Character>(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'character', character);
  }
}
