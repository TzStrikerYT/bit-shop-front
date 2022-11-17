import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  URL_API = "http://localhost:5000/product"
  products: any //listar los productos
  currentProduct: Product //crear - actualizar - eliminar el formulario

  constructor(public http: HttpClient) { 
    this.currentProduct = new Product()
  }

  getProducts(){
    return this.http.get(`${this.URL_API}/get-products`)
  }

  createProduct(data: any){
    return this.http.post(`${this.URL_API}/create-product`, data)
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.URL_API}/delete-product?id=${id}`)
  }

  updateProduct(id: string, data: any){
    return this.http.put(`${this.URL_API}/update-product?id=${id}`, data)
  }

}
