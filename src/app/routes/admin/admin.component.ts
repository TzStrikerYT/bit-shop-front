import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){

    let response = this.productService.getProducts()

    response.subscribe((res: any) => {
      this.productService.products = res.data //[{}{}{}{}] arreglo de productos
      console.log(res)
    })

  }

  orderByPrice(){

    let products = this.productService.products || []
    let sortedProducts;

    console.log("Ejecucion")

    if (products || products.length > 0){
      sortedProducts = products.sort((a: any, b: any) => (a.price > b.price) ? -1 : 1)
      this.productService.products = sortedProducts
      return
    }

    return 
  }

}
