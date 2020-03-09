import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {DebtorsService}from './../debtors.service';
import {debtors} from './../Model/debtors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   debtors: debtors[];
  constructor(private debtorsService: DebtorsService) { }
  Debtors: any=[];
  ngOnInit(): void {
    this.GetDebtors();
  }
  GetDebtors(){
   this.debtorsService.getDebtors().subscribe( d =>{
      this.debtors= d ;
   })
  }

}
