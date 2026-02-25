import { Component } from '@angular/core';
import { CategoryService } from '../Services/CategoryService/category.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebRequestProductService } from '../Services/HttpClientService/web-request-product.service';
export interface Category{
   Name: string;
   Description: string;
    ImageData: string | null;
}

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  title = "Category";
  data: any[] = [];
  categories: Category[] = [];

  ngOnInit(): void {
     if(this.data.length==0){
      this.show();
     }
     else {
      this.categories = this.data;
     }
  }
  constructor(private categoryService: CategoryService,private router:Router,private http:HttpClient,private productService:WebRequestProductService) {}

  show() {
      this.categoryService.ShowCategory(this.title).subscribe((response: any) => {
      this.categories = response;
    });
  }

 getImageSrc(imageData: string | null): string {
    if (imageData) {
      return `data:image/jpeg;base64,${imageData}`;
    }
    return 'https://via.placeholder.com/80';
  }
  viewCategory(category: Category): void {
    console.log('Viewing category:', category);
    this.productService.fetchProductsByCategory(category.Name);
    this.productService.fetchProductsByCategory(category.Name);
  }
}
