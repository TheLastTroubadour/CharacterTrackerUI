import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Epic15Quest} from "../model/epic1-5-quest";
import {ServerConstants} from "../server-constants";

@Injectable({
  providedIn: 'root'
})
export class Epic15Service {



  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
  }

  constructor(private http: HttpClient) {
  }

  getAllEpic15(): Observable<Epic15Quest[]> {
    return this.http.get<Epic15Quest[]>(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + "epic-1-5", this.httpOptions).pipe();
  }
}
