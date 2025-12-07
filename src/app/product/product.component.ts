import { Component } from '@angular/core';
import { ProductService } from '../Services/ProductService/product.service';
import { CommonModule } from '@angular/common';


export interface Product {
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
  
  constructor(private productService: ProductService) {;
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
    console.log('Adding to cart:', product);
    // Implement your add to cart logic here
  }
  show() {

  }
  
  getImageSrc(imageData: string | null): string {
    if (imageData) {
      // If ImageData is base64 string
      return `data:image/jpeg;base64,${imageData}`;
    }
    // Placeholder image if no image data
    return 'https://via.placeholder.com/80';
  }

}
