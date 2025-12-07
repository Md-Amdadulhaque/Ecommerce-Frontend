import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebrequestMcpService } from '../HttpClientService/webrequest-mcp.service';

@Injectable({
  providedIn: 'root'
})
export class MCPServiceService {

  constructor(
    private webRequstMcp: WebrequestMcpService,
    private router: Router
  ) { }

  CallMCP(data: any) {
    this.webRequstMcp.CallMCP(data).subscribe({
      next: (response: any) => {
        this.redirectController(response);
      },
      error: (err) => {
        console.error('Error calling MCP:', err);
      }
    });
  }

  private redirectController(response: any) {
    // Example logic based on response type
    //if (response.type === 'product') {
      this.router.navigate(['/Product'], { state: { data: response } });
   // } 
    // else if (response.type === 'category') {
    //   this.router.navigate(['/Category'], { state: { data: response } });
    // } 
    // else if (response.type === 'message') {
    //   this.router.navigate(['/ChatBox'], { state: { data: response } });
    // } 
    // else {
    //   console.warn('Unknown response type:', response);
    //   this.router.navigate(['/Error']);
    // }
  }
}
