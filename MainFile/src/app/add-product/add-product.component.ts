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
    categoryName: ''
  };
  selectedFile: File | null = null;
  imageError: boolean = false;

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
      // Remove imagedata from form controls, handle file separately
      categoryName: ''
    });
  }
  selectedCategoryName: string = '';

  onCategoryChange(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  this.selectedCategoryName = selectElement.value;
  console.log('Selected Category Name:', this.selectedCategoryName);
}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.imageError = false;
    } else {
      this.selectedFile = null;
      this.imageError = true;
    }
  }

  onSubmit(): void {
    if (this.productForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('name', this.productForm.value.name);
      formData.append('description', this.productForm.value.description);
      formData.append('price', this.productForm.value.price);
      formData.append('category', this.selectedCategoryName);
      formData.append('image', this.selectedFile);
      this.serviceProduct.PostProduct(formData);
      this.productForm.reset();
      this.selectedFile = null;
    } else if (!this.selectedFile) {
      this.imageError = true;
    }
  }
}