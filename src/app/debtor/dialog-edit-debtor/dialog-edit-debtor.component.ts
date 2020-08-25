import {Component, Inject, OnInit} from '@angular/core';
import {debtors} from '../../Model/debtors';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DebtorsService} from '../../debtors.service';

@Component({
  selector: 'app-dialog-edit-debtor',
  templateUrl: './dialog-edit-debtor.component.html',
  styleUrls: ['./dialog-edit-debtor.component.css']
})
export class DialogEditDebtorComponent implements OnInit {
  debtor: debtors;
  editForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<DialogEditDebtorComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private debtorsService: DebtorsService, private fb: FormBuilder) { }

  ngOnInit() {
     this.debtor = this.data;
     this.editForm = this.fb.group({
       name: this.debtor.name,
       lastname: this.debtor.lastname,
       age: this.debtor.age,
       debt: this.debtor.debt,
       location: this.debtor.location,
     });
  }
  onNoClick(): void{
    this.dialogRef.close();
  }
  updateDebtor(debtorId: number) {
    this.debtorsService.updateDebtor(debtorId, this.editForm.value).subscribe(
      data => console.log(data), error => console.log(error));
  }
}
