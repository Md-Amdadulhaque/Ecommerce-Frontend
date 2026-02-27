import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ProfileComponent } from './profile/profile.component';
//import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, RouterModule, CommonModule, FormsModule, ChatBoxComponent, ProfileComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  isLoggedIn(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage.getItem('authToken');
  }
}
