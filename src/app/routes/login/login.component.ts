import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  login(form: NgForm){

    let {email, password} = form.value

    if(!email || !password){
      alert("Diligencie todos los campos")
      return
    }

    this.userService.login(email, password).subscribe(
      (res) => {
        alert("Usuario logueado correctamente")
        this.userService.userLogged = "token desencriptado"
        // proteger las vistar contra los usuarios que no esten logueados
        //mostrar los datos en la barra de navegación
      },
      (err) => {
        alert(err.error.msg)
      }
    )

  }

}
