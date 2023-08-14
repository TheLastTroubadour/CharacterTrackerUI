import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ServerConstants} from "../server-constants";
import {Character} from "../model/character";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
  }

  constructor(private http: HttpClient) { }

  getCharacter(): Observable<Character[]> {
    return this.http.get<Character[]>(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'character', this.httpOptions).pipe();
  }

  addCharacter(character: Character): any {
    return this.http.post<Character>(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'character/1', character, this.httpOptions)
     .subscribe(res => {
       return res;
     })
  }
}
