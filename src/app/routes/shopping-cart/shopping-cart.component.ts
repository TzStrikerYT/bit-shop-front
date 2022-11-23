import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productsChart: any

  constructor(public productService: ProductService) { 
  }

  ngOnInit(): void {
    this.getProductsToShop()
  }

  getProductsToShop(){
    let products = JSON.parse(localStorage.getItem("productChart") || "[]")
    this.productsChart = products
    //this.productService.shoppingCart = products
  }

  deleteFromCart(id: string = ""){
    let products = JSON.parse(localStorage.getItem("productChart") || "[]") // === [ una lista ]

    //filtrar esa lista

    products = products.filter((product: any) => product.id !== id) //[ {}-> product :) ]
    let string = JSON.stringify(products)

    //establecer nuevamente en el local storage el productChart
    localStorage.setItem("productChart", string)
    this.getProductsToShop()

    console.log("borrar", id)
  }

}
