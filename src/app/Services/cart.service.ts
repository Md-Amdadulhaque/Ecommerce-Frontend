import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'https://localhost:7166/api/Cart'; // replace with your backend

  constructor(private http: HttpClient) { }

  addToCart(userId: string, productId: string): Observable<any> {
    const body = { userId, productId };
    return this.http.post(`${this.apiUrl}/AddToCart`, body);
  }
}
