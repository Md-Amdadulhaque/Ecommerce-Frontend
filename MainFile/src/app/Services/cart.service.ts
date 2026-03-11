import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../../environments/environment.development'; 
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = API.CART;

  constructor(private http: HttpClient) { }

  addToCart(userId: string, productId: string): Observable<any> {
    const body = { userId, productId };
    return this.http.post(`${this.apiUrl}/AddToCart`, body);
  }
}
