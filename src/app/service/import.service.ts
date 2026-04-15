import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServerConstants} from '../server-constants';

@Injectable({
  providedIn: 'root'
})
export class ImportService {

  constructor(private http: HttpClient) {}

  importJson(payload: unknown): Observable<unknown> {
    return this.http.post(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'import', payload);
  }
}
