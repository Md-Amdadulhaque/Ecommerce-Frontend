import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MCPServiceService } from '../Services/MCPService/mcp-service.service';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {
  @ViewChild('chatBox') chatBox!: ElementRef<HTMLDivElement>;

  messages: Message[] = [];
  newMessage: string = '';
  minimized: boolean = false;

  private isDragging = false;
  private offsetX = 0;
  private offsetY = 0;
  constructor(private mcpServiceService: MCPServiceService) {


  }
  sendMessage() {
    if (!this.newMessage.trim()) return;
    this.messages.push({ text: this.newMessage, sender: 'user' });
    const userMessage = this.newMessage;
    this.mcpServiceService.CallMCP(this.newMessage)
    this.newMessage = '';
    setTimeout(() => {
      this.messages.push({ text: `Bot: You said "${userMessage}"`, sender: 'bot' });
    }, 50);
  }

  minimizeChat(event: MouseEvent) {
    event.stopPropagation();
    this.minimized = !this.minimized;
  }

  startDrag(event: MouseEvent) {
    // only drag if clicked on title bar
    if ((event.target as HTMLElement).classList.contains('chatbox-title')) {
      this.isDragging = true;
      const rect = this.chatBox.nativeElement.getBoundingClientRect();
      this.offsetX = event.clientX - rect.left;
      this.offsetY = event.clientY - rect.top;

      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.stopDrag);
    }
  }

  onDrag = (event: MouseEvent) => {
    if (!this.isDragging) return;
    this.chatBox.nativeElement.style.left = event.clientX - this.offsetX + 'px';
    this.chatBox.nativeElement.style.top = event.clientY - this.offsetY + 'px';
    this.chatBox.nativeElement.style.bottom = 'auto';
    this.chatBox.nativeElement.style.right = 'auto';
  }

  stopDrag = () => {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.onDrag);
    document.removeEventListener('mouseup', this.stopDrag);
  }
}
