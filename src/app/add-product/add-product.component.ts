import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../Services/ProductService/product.service';
import { CommonModule, NgFor } from '@angular/common';
import { CategoryService } from '../Services/CategoryService/category.service';
import { normalize } from 'node:path';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm: FormGroup;
  title = "addproduct";
  categoryList: any[] = [];
  product = {
    name: '',
    description: '',
    price: 0,
    imagedata: '',
    categoryid: ''
  };

  ngOnInit() {
    this.categoryService.ShowCategory(this.title).subscribe((response: any) => {
      this.categoryList = response;
    });
  }

  constructor(private fb: FormBuilder, private serviceProduct: ProductService, private categoryService: CategoryService) {
    this.productForm = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      price: [[Validators.required, Validators.min(1)]],
      imagedata: ['', [Validators.required]],
      categoryName: ''
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.product = this.productForm.value;
      this.serviceProduct.PostProduct(this.product);
      this.productForm.reset();
    }
  }
}