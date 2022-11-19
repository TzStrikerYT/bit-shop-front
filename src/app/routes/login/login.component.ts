import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm){

    let {email, password} = form.value

    if(!email || !password){
      alert("Diligencie todos los campos")
      return
    }

    this.userService.login(email, password).subscribe(
      (res: any) => {
        //localStorage.setItem('llave', valor)
        localStorage.setItem("token", res.token)
        this.router.navigate(['/home'])

        // proteger las vistar contra los usuarios que no esten logueados
        //mostrar los datos en la barra de navegación
      },
      (err) => {
        alert(err.error.msg)
      }
    )

  }

}
