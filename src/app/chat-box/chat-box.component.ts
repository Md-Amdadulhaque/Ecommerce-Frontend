import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}
@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatBoxComponent {
  messages: Message[] = [];
  newMessage: string = '';

  sendMessage() {
    if (!this.newMessage.trim()) return;

    // Add user message
    this.messages.push({ text: this.newMessage, sender: 'user' });

    // Clear input
    const userMessage = this.newMessage;
    this.newMessage = '';

    // Simulate bot reply
    setTimeout(() => {
      this.messages.push({ text: `Bot: You said "${userMessage}"`, sender: 'bot' });
    }, 50);
  }
}
