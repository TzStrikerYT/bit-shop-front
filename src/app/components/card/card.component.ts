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
  // @Input() options: any
  // /*{
  //   title: "",


  // }*/

  constructor() {

   }

  ngOnInit(): void {
  }

  buy(): void{
    alert("Elemento añadido")
  }

}
