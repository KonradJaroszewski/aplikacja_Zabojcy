import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth/auth.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Url } from 'url';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService,private router: Router) { }
  canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : boolean | UrlTree | Observable<boolean|UrlTree>|Promise<boolean| UrlTree>{
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/dashboard']);
    }
    return !this.authService.isLoggedIn();
  }
}
