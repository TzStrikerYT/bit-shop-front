import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API = "http://localhost:5000/user"
  currentUser: User

  constructor(public http: HttpClient) { 
    this.currentUser = new User()
  }

  signUp(data: any){
    return this.http.post(`${this.URL_API}/signup`, data)
  }

}
