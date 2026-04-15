import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tier5XegonyKeyQuest} from '../model/tier5-xegony-key-quest';
import {Tier5PoAAugmentQuest} from '../model/tier5-po-aaugment-quest';
import {ServerConstants} from '../server-constants';

@Injectable({
  providedIn: 'root'
})
export class Tier5QuestTrackerService {

  constructor(private http: HttpClient) {}

  getAllXegonyKeyQuests(): Observable<Tier5XegonyKeyQuest[]> {
    return this.http.get<Tier5XegonyKeyQuest[]>(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'tier-5/xegony-keys');
  }

  getAllPoAAugmentQuests(): Observable<Tier5PoAAugmentQuest[]> {
    return this.http.get<Tier5PoAAugmentQuest[]>(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'tier-5/poa-augments');
  }
}
