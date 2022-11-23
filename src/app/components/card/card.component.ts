import { LocationStrategy } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string | undefined
  @Input() description: string | undefined
  @Input() image: string | undefined
  @Input() btnText: string | undefined
  @Input() btnColor: string | undefined
  @Input() cardSize: string | undefined
  @Input() stock: number | undefined
  @Input() itemId: string | undefined
  // @Input() options: any
  // /*{
  //   title: "",


  // }*/

  constructor() {

   }

  ngOnInit(): void {
  }

  buy(id: string = "", name: string = "", image: string = "", description: string = ""): void{

    let isFilledChart = localStorage.getItem('productChart')

    if(isFilledChart){
      //concatenar mas valores

      //extraer los valores existentes en formato JSON
      let value = localStorage.getItem('productChart') || ""

      let obj = JSON.parse(value) // convertimos a JSON

      //agregar el valor nuevo a la lista

      obj.push({id, name, image, description})
      
      //convertilo en string
      let string = JSON.stringify(obj)

      //guardar en local storage
      localStorage.setItem("productChart", string)
      return
    }

    // un valor nuevo

    //armar el objeto en una lista vacia
    let toSave = [{id, name, image, description}]

    let string = JSON.stringify(toSave) || ""

    //convertirlo a string
    localStorage.setItem("productChart", string)
  }

}
