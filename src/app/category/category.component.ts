import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
     title = "Category";
     data:any[]=[];

     constructor (private categoryService:CategoryService){
      this.categoryService.ShowCategory(this.title).subscribe((response:any)=>{
        this.data = response;     
        });
     }
     show(){
     
    }
}
