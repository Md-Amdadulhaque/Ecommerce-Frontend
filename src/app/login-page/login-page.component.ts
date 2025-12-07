import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../Services/login.service';
import { log } from 'console';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor (private loginService: LoginService) {}

  login() {
    this.errorMessage = '';
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter username and password';
      return;
    }
    this.loginService.loginAndRedirect({ username: this.username, password: this.password });

  }
}
