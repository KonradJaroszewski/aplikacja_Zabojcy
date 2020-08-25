import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {DebtorsService} from '../../debtors.service';
import {MatDialog} from '@angular/material/dialog';
import {debtors} from '../../Model/debtors';
import {DialogForgiveComponent} from '../dialog-forgive/dialog-forgive.component';
import {DialogEditDebtorComponent} from '../dialog-edit-debtor/dialog-edit-debtor.component';
import {DialogAddDebtorComponent} from '../dialog-add-debtor/dialog-add-debtor.component';


@Component({
  selector: 'app-debtor-list',
  templateUrl: './debtor-list.component.html',
  styleUrls: ['./debtor-list.component.css']
})
export class DebtorListComponent implements OnInit {
 debtorData: debtors[];
 dataSource = new MatTableDataSource(this.debtorData);
 displayedColumns = [ 'name', 'lastname', 'age', 'debt', 'delete', 'edit', 'forgive', 'location'];

 @Output() selectedDebtor = new EventEmitter();
 @ViewChild(MatSort, {static: true }) sort: MatSort;

  constructor(private debtorsService: DebtorsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getDebtors();
    this.dataSource.sort = this.sort;
  }
  getDebtors() {
    this.debtorsService.getDebtors().subscribe(debtorData => {
      this.debtorData = debtorData;
      this.dataSource.data = this.debtorData;
    });
  }
  openAddDialog() {
    this.dialog.open(DialogAddDebtorComponent, {
      width: '200px'
    }).afterClosed().subscribe(() => {
      this.getDebtors();
    });
  }
  openEditDialog(debtor: debtors) {
    this.dialog.open(DialogEditDebtorComponent, {
      width: '200px',
      data: {
        id: debtor.id, name: debtor.name, lastname: debtor.lastname, age: debtor.age, debt: debtor.debt, location: debtor.location
      }
    }).afterClosed().subscribe(() => {
      this.getDebtors();
    });
  }
 deleteDebtor(debtor: debtors) {
    this.debtorsService.deleteDebtor(debtor.id)
      .subscribe(() => {
        this.getDebtors();
      });
 }
 openForgiveDialog(debtor: debtors) {
    this.dialog.open(DialogForgiveComponent, {
      width: '400px',
      data: {id: debtor.id}
    }).afterClosed().subscribe(() => {
      this.getDebtors();
    });
 }
 location(debtor: debtors) {
    this.selectedDebtor.emit(debtor);
 }
}
