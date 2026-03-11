import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../Models/User.model';
import { CommonModule } from '@angular/common'; 
import { API } from '../../environments/environment.development';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {
    user?: User;
    constructor(private http: HttpClient, private router: Router) {}
    
    ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
    console.log('Fetching profile for userId:', userId);
    if(userId === 'undefined') {
      console.error('Invalid userId:', userId);
      this.router.navigate(['/Login-page']);
      return;
    }
    this.user = {
        id: localStorage.getItem('userId') || '',
        name: localStorage.getItem('userName') || '',
        email: localStorage.getItem('userEmail') || '',
        roles: localStorage.getItem('roles')|| ''
      };
      console.log('User data:', this.user.name, this.user.email, this.user.roles);
  }
  else {
    this.router.navigate(['/Login-page']);
  }  
 }
}
