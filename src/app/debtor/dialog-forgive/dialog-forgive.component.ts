import {Component, Inject, OnInit} from '@angular/core';
import {DebtorsService} from '../../debtors.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-forgive',
  templateUrl: './dialog-forgive.component.html',
  styleUrls: ['./dialog-forgive.component.css']
})
export class DialogForgiveComponent implements OnInit {

  constructor(private debtorsService: DebtorsService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DialogForgiveComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  cancelTask(debtorsId: number) {
    this.debtorsService.cancelTask(debtorsId)
      .subscribe(
        data => {
          console.log(data);
        },
      error => console.log(error));
  }
}
