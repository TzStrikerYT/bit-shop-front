import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import Swal from 'sweetalert2';// sweetalert2

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    let response = this.productService.getProducts();

    response.subscribe((res: any) => {
      this.productService.products = res.data; //[{}{}{}{}] arreglo de productos
      console.log(res);
    });
  }

  orderByPrice() {
    let products = this.productService.products || [];
    let sortedProducts;

    console.log('Ejecucion');

    if (products || products.length > 0) {
      sortedProducts = products.sort((a: any, b: any) =>
        a.price < b.price ? 1 : -1
      );
      //({},{}) => ({}.price < {}.price) ? 1 : -1)
      //if condicion{
      //  se cumple
      //} else {
      //  no se cumple
      //}

      //(condicion)? si cumple : si no se cumple

      this.productService.products = sortedProducts;
      return;
    }

    return;
  }

  createProduct(form: NgForm) {
    console.log(form.value); //{datos del formulario}

    if(form.value._id){
      this.updateProduct(form.value)
      return 
    }

    delete form.value._id //elimina el _id null

    let { name, description } = form.value;

    if (!name || !description)
      return alert('Diligencie por favor todos los campos');

    this.productService.createProduct(form.value).subscribe((res: any) => {
      this.getProducts();
      alert(res.msg);
      this.productService.currentProduct = new Product()
    });
  }

  deleteProduct(id: string, name: string) {

    Swal.fire({
      title: `Esta seguro que desea eliminar el producto "${name}"`,
      text: "Recuerda que esta acción es irreversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {

        this.productService.deleteProduct(id).subscribe((res: any) => {
          this.getProducts();
        });

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto Eliminado',
          showConfirmButton: false,
          timer: 1000
        })
      }
    })

    return;
  }

  updateProduct(data: Product){

    this.productService.updateProduct(data._id, data).subscribe((res) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto Actualizado',
        showConfirmButton: false,
        timer: 1000
      })
      this.getProducts()
      this.productService.currentProduct = new Product()
    })

  }

  fillForm(product: Product){
    this.productService.currentProduct = product
  }
}
