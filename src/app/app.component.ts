import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, RouterModule, CommonModule, FormsModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
