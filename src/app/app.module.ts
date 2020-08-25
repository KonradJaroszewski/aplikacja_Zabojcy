import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptorService} from './auth/token-interceptor.service';
import {NgxWidgetGridModule} from 'ngx-widget-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DebtorListComponent } from './debtor/debtor-list/debtor-list.component';
import { KillerListComponent } from './killer/killer-list/killer-list.component';
import { DialogAddDebtorComponent } from './debtor/dialog-add-debtor/dialog-add-debtor.component';
import { DialogEditDebtorComponent } from './debtor/dialog-edit-debtor/dialog-edit-debtor.component';
import { DialogForgiveComponent } from './debtor/dialog-forgive/dialog-forgive.component';
import { DialogMapDebtorComponent } from './debtor/dialog-map-debtor/dialog-map-debtor.component';
import { DialogAddKillerComponent } from './killer/dialog-add-killer/dialog-add-killer.component';
import { DialogEditKillerComponent } from './killer/dialog-edit-killer/dialog-edit-killer.component';
import { DialogMapKillerComponent } from './killer/dialog-map-killer/dialog-map-killer.component';
import { DialogOrderComponent } from './killer/dialog-order/dialog-order.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    DebtorListComponent,
    KillerListComponent,
    DialogAddDebtorComponent,
    DialogEditDebtorComponent,
    DialogForgiveComponent,
    DialogMapDebtorComponent,
    DialogAddKillerComponent,
    DialogEditKillerComponent,
    DialogMapKillerComponent,
    DialogOrderComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxWidgetGridModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [
    {
    provide : HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
