import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:3000/';
  isLogin = false;
  Admin = false;
  constructor(private http: HttpClient) {}
  login(obj: any): Observable<any> {
    return this.http.post(`${this.baseUrl}users/login`, obj);
  }
  // users():Observable<any> {
  //   let tokens = localStorage.getItem("token")

  // }
  gotPodects(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }
  register(obj: any): Observable<any> {
    return this.http.post(`${this.baseUrl}users/addUser`, obj);
  }
  userProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}users/profile`);
  }
}
