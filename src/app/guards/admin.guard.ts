import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public router: Router, public userService: UserService){

  }

  canActivate(){

    let token: any = localStorage.getItem("token") || ""
    
    if(token){

      let { isAdmin }: any = this.userService.decodeToken()
      if(isAdmin){
        return true
      }

    }

    this.router.navigate(['/home'])
    return false

  }
  
}
