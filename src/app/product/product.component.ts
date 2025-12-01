import { Component } from '@angular/core';
import { ProductService } from '../Services/ProductService/product.service';
import { CommonModule } from '@angular/common';

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
  constructor(private productService: ProductService) {
    this.productService.ShowProduct(this.title).subscribe((response: any) => {
      this.data = response
    });
  }
  show() {

  }


}
