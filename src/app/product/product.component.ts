import { Component } from '@angular/core';
import { ProductService } from '../Services/ProductService/product.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../Services/cart.service';
import { Router } from '@angular/router';

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
  isAdding: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';
  constructor(private productService: ProductService,private cartService:CartService,private router:Router) {;
  }
  ngOnInit(): void {
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
    this.errorMessage = '';
    this.successMessage = '';
    this.isAdding = false;
    console.log('Adding to cart:', product);
    this.cartService.addToCart(userId, productId)
      .subscribe({
        next: res => {
          this.successMessage = 'Product added to cart!';
        this.isAdding = false;
        },
        error: err => {
          this.errorMessage = 'Failed to add product.';
        this.isAdding = false;
        }
      });
      this.router.navigate(['/Cart']);
  }
  getImageSrc(imageData: string | null): string {
    if (imageData) {
      return `data:image/jpeg;base64,${imageData}`;
    }
    return 'https://via.placeholder.com/80';
  }
}
