import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {API} from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = API.LOGIN;
  constructor(private http: HttpClient, private router: Router) { }
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }
  loginAndRedirect(credentials: { username: string; password: string }): void {
    this.login(credentials).subscribe({
      next: (response: any) => {
        if (response.token) {
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('userId', response.userId);
          localStorage.setItem('userName', credentials.username);
          localStorage.setItem('roles', response.roles);
          console.log('Login successful, token stored:', response.token);
          this.router.navigate(['/Home']);
        } else {
          console.warn('Login failed: invalid credentials');
          this.router.navigate(['/Error']);
        }
      },
      error: (err) => {
        console.error('Full error object:', err);
        console.error('Error status:', err.status);
        console.error('Error message:', err.message);
        console.error('Error details:', err.error);
        this.router.navigate(['/Error']);
      }
    });
  }
}
