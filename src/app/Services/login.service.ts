import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://localhost:7166/api/User/login'; // Replace with your backend login API URL

  constructor(private http: HttpClient, private router: Router) { }
  login(credentials: { username: string; password: string }): Observable<string> {
    return this.http.post<string>(this.apiUrl, credentials);
  }
  loginAndRedirect(credentials: { username: string; password: string }) {
    this.login(credentials).subscribe({
      next: (token: string) => {
        if (token) {
          localStorage.setItem('authToken', token);
          this.router.navigate(['/Home']);
        } else {
          console.warn('Login failed: invalid credentials');
          this.router.navigate(['/LoginError']);
        }
      },
      error: (err) => {
        console.error('Login API error:', err);
        this.router.navigate(['/LoginError']);
      }
    });
  }
}
