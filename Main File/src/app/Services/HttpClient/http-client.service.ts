import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../../../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private apiUrlBase = config.apiUrlBase;
  constructor(private http: HttpClient) { }

  getData(controllerName: string) {
    const url = `${this.apiUrlBase}${controllerName}`;
    return this.http.get<any[]>(url);
  }
}
