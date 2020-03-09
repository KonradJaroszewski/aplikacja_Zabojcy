import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {AuthService} from'./auth/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuardService implements CanActivate{

  constructor(private authService: AuthService,private router:Router) { }
  canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : boolean | UrlTree | Observable<boolean|UrlTree>|Promise<boolean| UrlTree>{
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    return this.authService.isLoggedIn();
  }
}
