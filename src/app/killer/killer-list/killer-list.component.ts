import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {killers} from '../../Model/killers';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {KillersService} from '../../killers.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogEditKillerComponent} from '../dialog-edit-killer/dialog-edit-killer.component';
import {DialogOrderComponent} from '../dialog-order/dialog-order.component';

@Component({
  selector: 'app-killer-list',
  templateUrl: './killer-list.component.html',
  styleUrls: ['./killer-list.component.css']
})
export class KillerListComponent implements OnInit {
  killerData: killers[];
  dataSource = new MatTableDataSource(this.killerData);
  displayedColumns = ['pseudonym', 'salary', 'delete', 'edit', 'target', 'location' ];
  @Output() selectedKiller = new EventEmitter();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private killersService: KillersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getKillers();
    this.dataSource.sort = this.sort;
  }
  getKillers() {
    this.killersService.getKillers().subscribe(killerData => {
      this.killerData = killerData;
      this.dataSource.data = this.killerData;
    });
  }
  openAddDialog(): void {
    this.dialog.open(DialogEditKillerComponent, {
      width: '200 px'
    }).afterClosed().subscribe(() => {
      this.getKillers();
    });
  }
  openEditDialog(killer: killers) {
    this.dialog.open(DialogEditKillerComponent, {
      width: '200 px',
      data: {
        id: killer.id, pseudonym: killer.pseudonym, salary: killer.salary, location: killer.location
      }
    }).afterClosed().subscribe(() => {
      this.getKillers();
    });
  }
  deleteKiller(killer: killers) {
    this.killersService.deleteKiller(killer.id)
      .subscribe(() => {
        this.getKillers();
      });
  }
  openOrderDialog(killer: killers) {
    this.dialog.open(DialogOrderComponent, {
      width: '200px',
      data: {
        id: killer.id,
        targetId: killer.targetId
      }
    }).afterClosed().subscribe(() => {
      this.getKillers();
    });
  }
  location(killer: killers) {
    this.selectedKiller.emit(killer);
  }
}
