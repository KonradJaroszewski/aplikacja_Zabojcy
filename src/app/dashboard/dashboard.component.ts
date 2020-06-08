import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {DebtorsService} from './../debtors.service';
import {debtors} from './../Model/debtors';
import {killers} from './../Model/killers';
import {widget} from './../Model/widget';
import { Router } from '@angular/router';
import { KillersService } from '../killers.service';
import { DashboardService } from '../dashboard.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName: string;
   debtors: debtors[];
   killers: killers[];
   widget: widget[];
   map: Map;

  constructor(private debtorsService: DebtorsService,
              private router: Router,
              private killerService: KillersService,
              private dashboardService: DashboardService,
              private fb: FormBuilder,
              private authService: AuthService) { }
  Debtors: any = [];
  ngOnInit(): void {
    this.userName = this.authService.user;
    this.getWidgets();
    this.showWidgets();
    this.getDebtors();
    this.getKillers();
      }

    getWidgets() {
    this.dashboardService.getWidget(+this.authService.userId).subscribe(
      widget => {
        this.widget = widget;

      }
    );
    }
    showWidgets() {
    if (this.widget) {
    const widgetChecked = this.widget.filter(wc => wc.type in this.widget.map(w => w.type));
    widgetChecked.forEach(wo => wo.checked = true);
    }
    }

   getDebtors() {
     this.debtorsService.getDebtors().subscribe(
       debtors => this.debtors = debtors
     );
   }
   getKillers() {
     this.killerService.getKillers().subscribe(
       killers => this.killers = killers
     );
   }



}
