import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../Services/CategoryService/category.service';
@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  categoryForm: FormGroup;
  categoryList: any[] = [];
  title = "addCategory";
  category = {
    name: '',
    description: '',
    imagedata: ''
  };
  constructor(private fb: FormBuilder, private categoryService: CategoryService) {
    this.categoryForm = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      imagedata: ['']  // Optional field
    });

  }
  onSubmit(): void {
    if (this.categoryForm.valid) {
      this.category = this.categoryForm.value;
      this.categoryService.PostCategory(this.category);
      this.categoryForm.reset();
    }
  }

  ngOnInit() {
    this.categoryService.ShowCategory(this.title).subscribe((response: any) => {
      this.categoryList = response;
    });
  }
}