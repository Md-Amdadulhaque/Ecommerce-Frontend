import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:5149/api/User/Login'; // Replace with your backend login API URL

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
