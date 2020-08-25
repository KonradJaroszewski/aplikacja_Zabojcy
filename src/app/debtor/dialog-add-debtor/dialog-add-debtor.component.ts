import {Component, Inject, OnInit} from '@angular/core';
import {debtors} from '../../Model/debtors';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DebtorsService} from '../../debtors.service';
@Component({
  selector: 'app-dialog-add-debtor',
  templateUrl: './dialog-add-debtor.component.html',
  styleUrls: ['./dialog-add-debtor.component.css']
})
export class DialogAddDebtorComponent {
  debtor: debtors = new debtors();
  constructor(public dialogRef: MatDialogRef<DialogAddDebtorComponent>, @Inject(MAT_DIALOG_DATA) public data: debtors,
              private  debtorsService: DebtorsService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  addDebtor() {
    this.debtorsService.addDebtor(this.debtor).subscribe(data => console.log(data), error => console.log(error));
    this.debtor = new debtors();
  }
}
