import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServerConstants} from '../server-constants';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'user');
  }
}
