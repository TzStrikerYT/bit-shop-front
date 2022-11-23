import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  productsChart: any;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.getProductsToShop();
  }

  getProductsToShop() {
    let products = JSON.parse(localStorage.getItem('productChart') || '[]');
    this.productsChart = products;
    //this.productService.shoppingCart = products
  }

  deleteFromCart(id: string = '') {
    let products = JSON.parse(localStorage.getItem('productChart') || '[]'); // === [ una lista ]

    //filtrar esa lista

    products = products.filter((product: any) => product.id !== id); //[ {}-> product :) ]
    let string = JSON.stringify(products);

    //establecer nuevamente en el local storage el productChart
    localStorage.setItem('productChart', string);
    this.getProductsToShop();

    console.log('borrar', id);
  }

  productsCount(simbol: string = '+', id: string = '') {
    console.log(simbol, id);

    let products = JSON.parse(localStorage.getItem('productChart') || '[]');

    let newArr = []

    for (let p of products) {

      if (p.id === id) {
        if (simbol === '+') {
          p.productCount += 1;
        } else {
          if (p.productCount || p.productCount !== 0) {
            p['productCount'] -= 1;
          }
        }
      }

      newArr.push(p)
    }

    console.log(newArr)

    let string = JSON.stringify(newArr)
    this.productsChart = newArr
    localStorage.setItem("productChart", string)
    this.getProductsToShop()
  }
}
