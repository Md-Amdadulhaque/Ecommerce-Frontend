import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebRequestCategoryService {
  private apiUrl = 'http://localhost:5149/api/Category'; 
  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);  
  }
  postData(data:any){
    const categoryData = {
      Name: data.name,
      Description: data.description,
      ImageData:data.imagedata
    };
    this.http.post<any>(this.apiUrl,categoryData).subscribe(response => {
          console.log('Data sent successfully:', response);
        });
    }
   
}
