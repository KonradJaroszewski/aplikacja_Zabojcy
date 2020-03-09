import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardGuardService } from './dashboard-guard.service';


const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'/dashboard'},
  {
    path:'login',
    component:LoginComponent,
    canActivate:[AuthGuardService]
    },
    {path:'dashboard', component:DashboardComponent,canActivate: [DashboardGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
