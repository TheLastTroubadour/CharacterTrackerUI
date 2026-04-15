import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthResponse, LoginRequest, RegisterRequest} from '../model/auth';
import {ServerConstants} from '../server-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_KEY = 'eq_jwt';

  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'auth/login', credentials).pipe(
      tap(res => this.storeToken(res.token))
    );
  }

  register(details: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(ServerConstants.EQ_CHARACTER_TRACKER_API_URL + 'auth/register', details).pipe(
      tap(res => this.storeToken(res.token))
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  private storeToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
}
