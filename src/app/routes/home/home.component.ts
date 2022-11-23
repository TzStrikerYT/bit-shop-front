import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    let response = this.productService.getProducts();

    response.subscribe((res: any) => {
      this.productService.products = res.data; //[{}{}{}{}] arreglo de productos
      
    });
  }
}
