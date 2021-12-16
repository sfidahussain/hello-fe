import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getConfig() {
    const url = window.location.host + '/api/hello';
    console.log(url);
    return this.http.get<any>(url);
  }
}
