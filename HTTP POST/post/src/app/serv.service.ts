import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServService {

  
  constructor(private http: HttpClient) { }
  getEmployees() {
    return this.http.post<any>()
  }
  
}
