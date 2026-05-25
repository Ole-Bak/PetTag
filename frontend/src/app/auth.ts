import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/auth';
  private platformId = inject(PLATFORM_ID);
  isLoggedIn = signal(false);
  userName = signal('');
  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.userName.set(savedUser);
      this.isLoggedIn.set(true);
    }
  }
  register(userData: { name: string; email: string; pass: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData).pipe(
      tap((response: any) => {
        this.setSession(response.name);
      }),
    );
  }

  login(email: string, pass: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, pass }).pipe(
      tap((response: any) => {
        this.setSession(response.name);
      }),
    );
  }

  private setSession(name: string) {
    this.userName.set(name);
    this.isLoggedIn.set(true);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('currentUser', name);
    }
  }

  logout() {
    this.isLoggedIn.set(false);
    this.userName.set('');
    localStorage.removeItem('currentUser');
  }
}
