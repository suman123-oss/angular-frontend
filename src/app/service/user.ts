import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  // url = 'http://localhost:3000/api/';
  url = 'https://angular-backend-one.vercel.app/api/';
  constructor(private http: HttpClient) {}

  getUsersList() {
    return this.http.get(this.url + 'user');
  }

  postUser(data: any) {
    return this.http.post(this.url + 'user', data);
  }

  updateUser(data: any) {
    return this.http.put(this.url + 'user', data);
  }

  getUserById(id: any) {
    return this.http.get(this.url + 'user/'+id);
  }

  deleteUser(id:any){
    return this.http.delete(this.url + 'user/'+id);
  }
}
