import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public authService: AuthService, private router: Router ) { }
userDisplayLogin='';

  ngOnInit(): void {
    
    this.userDisplayLogin=this.authService.getLogin().toString();
    }
  logout(){
    this.authService.logout()
    .subscribe(success=>{
      if(success){
        this.router.navigate(['/login']);
      }
    });
  }
  

}
