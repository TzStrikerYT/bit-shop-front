import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';


import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API = "http://localhost:5000/user"
  currentUser: User
  userLogged: any

  constructor(public http: HttpClient, public router: Router) { 
    this.currentUser = new User()
    this.userLogged = null
  }

  signUp(data: any){
    return this.http.post(`${this.URL_API}/signup`, data)
  }

  login(email: string, password: string){
    return this.http.post(`${this.URL_API}/login`, {email, password})
  }

  decodeToken(){

    let token = localStorage.getItem('token')
    let decoded = jwtDecode(token || "Error en token")// retornar el payload del token
    console.log(decoded)
    return decoded

  }

  logOut(){

    localStorage.removeItem("token")
    this.router.navigate(['/login'])
    return

  }

}
