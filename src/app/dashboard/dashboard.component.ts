import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {DebtorsService} from './../debtors.service';
import {debtors} from './../Model/debtors';
import {killers} from './../Model/killers';
import {widget} from './../Model/widget';
import { Router } from '@angular/router';
import { KillersService } from '../killers.service';
import { DashboardService } from '../dashboard.service';
import { FormBuilder } from '@angular/forms';
import 'ol/ol.css';
import {Map} from 'ol';
/*import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';*/
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName: string;
   debtors: debtors[];
   killers: killers[];
   isEditing = false;
   widget: widget[];
   selectedKiller: killers;
   selectedDebtors: debtors;
   map: Map;

  constructor(private debtorsService: DebtorsService,
              private router: Router,
              private killerService: KillersService,
              private dashboardService: DashboardService,
              private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.userName = this.authService.user;
    this.getWidgets();
    this.showWidgets();
    this.getDebtors();
    this.getKillers();
      }

    getWidgets() {
     this.dashboardService.getWidget(Number(this.authService.userId)).subscribe(
      widget => {
        this.widget = widget;
      }
    );
    }
    saveWidgets() {
    this.dashboardService.saveWidget(Number(this.authService.getLogin()), this.widget).subscribe(
      success => {
        if (success) {
          this.getWidgets();
        }
      }
    );
    }
    showWidgets() {
     if (this.widget) {
      const widgetChecked = this.widget.filter(wc => wc.type in this.widget.map(w => w.type));
      widgetChecked.forEach(wo => wo.checked = true);
    }
    }
    edit() {
    this.isEditing = true;
    }
    confirm() {
    this.isEditing = false;
    this.saveWidgets();
    }
    cancel() {
    this.isEditing = true;
    this.getWidgets();
    }
    checkUncheck(widgets: widget, event ) {
    const option = this.widget.find(w => w.type === widgets.type);
    option.checked = event.checked;
    }
    isVisible(widgets: widget) {
    return this.widget.find(wo => wo.type === widgets.type).checked;
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
   killerLocation(killer: killers) {
   this.selectedKiller = killer;
   }
   debtorLocation(debtor: debtors) {
    this.selectedDebtors = debtor;
   }


}
