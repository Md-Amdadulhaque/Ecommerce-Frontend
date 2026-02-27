import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {

  username = '';
  email = '';
  password = '';
  confirmPassword = '';

  private apiUrl = 'http://localhost:5149/api/User/RegisterUser';

  constructor(private http: HttpClient, private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = {
      username: this.username,
      email: this.email,
      password: this.password,
      role : 'User'
    };

  this.http.post('http://localhost:5149/api/User/RegisterUser', userData)
  .subscribe({
    next: res => {
        this.router.navigate(['/Login-page']);
    },
    error: err => {
      alert('Registration failed. Please try again.');
    }
  });

  }
}
