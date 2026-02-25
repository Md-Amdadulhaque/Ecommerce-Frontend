import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebrequestMcpService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://localhost:7127/api/chat/query';
  // CallMCP now returns an Observable<any>
  CallMCP(data: any): Observable<any> {
    return this.postData(data);
  }
  // postData returns the Observable directly, no internal subscription
  private postData(data: any): Observable<any> {
    const chatRequest1 = {
      UserQuery: data,
      UserName: localStorage.getItem('userName'),
      UserId: localStorage.getItem('userId')
    };
    return this.http.post<any>(this.apiUrl, chatRequest1);
  }
}

