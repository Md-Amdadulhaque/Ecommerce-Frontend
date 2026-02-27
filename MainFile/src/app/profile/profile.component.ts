import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../Models/User.model';
import { CommonModule } from '@angular/common'; 
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
      const url = `http://localhost:5149/api/User/GetUserById?userId=${userId}`;
    this.http.get<any>(url).subscribe(user1 => {
      this.user = {
        id: user1.Id,
        name: user1.UserName,
        email: user1.Email
      };
      console.log('User data:', this.user.name, this.user.email);
    });
  }
  else {
    this.router.navigate(['/Login-page']);
  }  
 }
}
