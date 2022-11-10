import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  URL_API = "http://localhost:5000/product"
  products: any
  currentProduct: Product

  constructor(public http: HttpClient) { 
    this.currentProduct = new Product()
  }

  getProducts(){
    return this.http.get(`${this.URL_API}/get-products`)
  }

  createProduct(data: any){
    return this.http.post(`${this.URL_API}/create-product`, data)
  }

}
