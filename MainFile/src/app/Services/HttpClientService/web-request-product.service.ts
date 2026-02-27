// src/app/web-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebRequestProductService {

  private apiUrl = 'http://localhost:5149/api/Product'; 

  constructor(private http: HttpClient,private router:Router) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
  fetchProductsByCategory(categoryName: string):void {
    var products:any[] = [];
    this.getDataByCategory(categoryName).subscribe({
      next: (response: any[]) => {
        products = response;
        this.router.navigate(['/Product'], { state: { data: products } });
      }
    });
  }
  getDataByCategory(categoryName: string): Observable<any[]> {
    const url = `http://localhost:5149/api/Product/category/${categoryName}`;
    return this.http.get<any[]>(url);
  }
  postData(data:any){
    const productData = {
      Name: data.name,
      Description: data.description,
      Price: data.price,
      ImageData:data.imagedata,
      Category:data.categoryName
    };
    this.http.post<any>(this.apiUrl,productData).subscribe(response => {
          console.log('Data sent successfully:', response);
        });
    }
}

