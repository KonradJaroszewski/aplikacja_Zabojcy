import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {debtors} from '../../Model/debtors';
import {killers} from '../../Model/killers';
import {DebtorsService} from '../../debtors.service';
import {KillersService} from '../../killers.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-order',
  templateUrl: './dialog-order.component.html',
  styleUrls: ['./dialog-order.component.css']
})
export class DialogOrderComponent implements OnInit {
  debtor: Observable<debtors[]>;
  killer: killers;
  selectedDebtorId: number;
  constructor(private debtorsService: DebtorsService, private killersService: KillersService,
              @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogOrderComponent>) {}

  ngOnInit(): void {
    this.killer = this.data;
    this.debtor = this.debtorsService.getDebtors();
    this.selectedDebtorId = this.getDebtor();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  getDebtor() {
    if (this.killer.targetId != null) {
      return this.killer.targetId;
    }
  }
  setTarget(killerId: number, targetId: number) {
    this.killersService.setTarget({killerId, targetId }).subscribe(data => console.log(data), error => console.log(error));
    this.dialogRef.close();
  }
  cancelTarget(targetId: number) {
    this.killersService.cancelTarget(targetId).subscribe(
      data => console.log(data), error => console.log(error));
    this.dialogRef.close();
  }
}
