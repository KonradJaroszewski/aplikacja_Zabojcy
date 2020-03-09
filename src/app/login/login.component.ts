import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators, ReactiveFormsModule,FormsModule, FormControl} from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm:FormGroup
  constructor(private fb:FormBuilder, private authService: AuthService, private router: Router) {}
   
   

  ngOnInit() {
   this.LoginForm=this.fb.group({
     login: ['',Validators.required],
     password: ['',Validators.required]
   }); 
  }
  get f(){ return this.LoginForm.controls;}
  
login(){
  this.authService.logIn(
    {
      login: this.f.login.value,
      password: this.f.password.value
      
    }
  )
  .subscribe(success=>{
    if(success){
      this.router.navigate(['/dashboard']);
    }
  })
}

}
