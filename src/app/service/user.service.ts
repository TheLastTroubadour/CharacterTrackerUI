import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ServerConstants} from "../server-constants";
import {Observable, Subscription} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
  }

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'user',this.httpOptions).pipe();
  }
}
