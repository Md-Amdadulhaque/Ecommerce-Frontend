import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://localhost:7166/api/User/Login'; // Replace with your backend login API URL

  constructor(private http: HttpClient, private router: Router) { }
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials, {
    responseType: 'text' // Accept plain text
  });
  }
  loginAndRedirect(credentials: { username: string; password: string }):void{
    this.login(credentials).subscribe({
      next: (token: any) => {
        if (token) {
          localStorage.setItem('authToken', token);
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
