import { Injectable } from '@angular/core';
import { WebRequestCategoryService } from './web-request-category.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private webReqCategoryService : WebRequestCategoryService)
   { }
  
  ShowCategory(title:string){
   return this.webReqCategoryService.getData();
  }

  PostCategory(data:any){
    this.webReqCategoryService.postData(data);
  }
  
  
}
