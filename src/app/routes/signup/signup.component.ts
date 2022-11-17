import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  signUp(form: NgForm){

    let {firstName, lastName, email, password, confirmPassword} = form.value

    if (!firstName || !lastName || !email || !password || !confirmPassword){
      Swal.fire({
        position: 'center',
        icon: 'error',
        text: 'Debes llenar todos los campos',
        showConfirmButton: true,
      })

      return 
    }

    if(password !== confirmPassword){
     
      Swal.fire({
        position: 'center',
        icon: 'error',
        text: 'Las contraseñas no coinciden',
        showConfirmButton: true,
      })

      return 
      
    }

    delete form.value.confirmPassword
    
    this.userService.signUp(form.value).subscribe(
      (res) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El usuario ha sido creado correctamente',
          showConfirmButton: false,
          timer: 1500
        })

        //navigate nos lleva al login
      },
      (err) => {
        Swal.fire(
          'Error!',
          `${err.error.msg || "Ha ocurrido un error"}`,
          'error'
        )
      }
    )

  }

}
