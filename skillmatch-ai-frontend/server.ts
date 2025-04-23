// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  signup(data: any) {
    return this.http.post(`${this.API}/signup`, data).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
      })
    );
  }

  login(data: any) {
    return this.http.post(`${this.API}/login`, data).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
