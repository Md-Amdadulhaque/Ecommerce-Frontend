import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

export interface catItem {
  ProductName: string;
  Quantity: number;
  Price: number;
  ImageUrl: string | null;
  UnitPrice: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartItems: catItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    const userId = localStorage.getItem('userId');
    if (!userId) return;

    const url = 'https://localhost:7166/api/Cart/GetCart';

    const body = { Id: userId }; // create an object to send
    this.http.post<any[]>(url, body).subscribe({
      next: (data: any[]) => {
        this.cartItems = data;
      },
      error: (err) => {
        console.error('Error loading cart items', err);
      }
    });

  }
}
