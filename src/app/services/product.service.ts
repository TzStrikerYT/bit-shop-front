import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  URL_API = "http://localhost:5000/product"
  products: any

  constructor(public http: HttpClient) { }

  getProducts(){
    return this.http.get(`${this.URL_API}/get-products`)
  }

}
