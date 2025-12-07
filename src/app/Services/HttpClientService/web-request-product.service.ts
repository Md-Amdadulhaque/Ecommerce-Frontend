// src/app/web-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebRequestProductService {

  private apiUrl = 'https://localhost:7166/api/Product'; 

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);  // API endpoint to fetch data
  }
  postData(data:any){
    const productData = {
      Name: data.name,
      Description: data.description,
      Price: data.price,
      ImageData:data.imagedata
    };
    this.http.post<any>(this.apiUrl,productData).subscribe(response => {
          console.log('Data sent successfully:', response);
        });
    }
}

