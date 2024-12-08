import { Injectable } from '@angular/core';
import { WebRequestProductService } from './web-request-product.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private webReqProductService:WebRequestProductService) 
  { }
  
  ShowProduct(title:string){
   return this.webReqProductService.getData();
  }
  PostProduct(data:any){
    this.webReqProductService.postData(data);
  }
}
