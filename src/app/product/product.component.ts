import { Component } from '@angular/core';
import { ProductService } from '../Services/ProductService/product.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../Services/cart.service';

export interface Product {
  Id : string;
  Name: string;
  Description: string;
  Price: number;
  Category: string;
  ImageData: string | null;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  title = "Product";
  data: any[] = [];
  products: Product[] = [];
  
  constructor(private productService: ProductService,private cartService:CartService) {;
  }
  ngOnInit(): void {
    this.loadProducts();
    if(this.data.length>0){
      this.products = this.data;
    }
    else {
      this.loadProducts();
    }
  }
  loadProducts(): void {
     this.productService.ShowProduct(this.title).subscribe((response: any) => {
      this.products = response
    });
  }
  addToCart(product: Product): void {
    const productId = product.Id;
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User not logged in');
      return;
    } 
    console.log('Adding to cart:', product);
    this.cartService.addToCart(userId, productId)
      .subscribe({
        next: res => console.log('Added to cart', res),
        error: err => console.error(err)
      });
  }
  getImageSrc(imageData: string | null): string {
    if (imageData) {
      return `data:image/jpeg;base64,${imageData}`;
    }
    return 'https://via.placeholder.com/80';
  }
}
