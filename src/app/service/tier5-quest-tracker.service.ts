import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tier5XegonyKeyQuest} from "../model/tier5-xegony-key-quest";
import {ServerConstants} from "../server-constants";
import {Tier5PoAAugmentQuest} from "../model/tier5-po-aaugment-quest";

@Injectable({
  providedIn: 'root'
})
export class Tier5QuestTrackerService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
  }

  constructor(private http: HttpClient) { }

  getAllXegonyKeyQuests(): Observable<Tier5XegonyKeyQuest[]> {
    return this.http.get<Tier5XegonyKeyQuest[]>(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + "tier-5/xegony-keys", this.httpOptions).pipe();
  }

  getAllPoAAugmentQuests(): Observable<Tier5PoAAugmentQuest[]> {
    return this.http.get<Tier5PoAAugmentQuest[]>(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + "tier-5/poa-augments", this.httpOptions).pipe();
  }
}
