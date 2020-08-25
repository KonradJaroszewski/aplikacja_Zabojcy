import {Component, Inject, OnInit} from '@angular/core';
import {killers} from '../../Model/killers';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {KillersService} from '../../killers.service';

@Component({
  selector: 'app-dialog-add-killer',
  templateUrl: './dialog-add-killer.component.html',
  styleUrls: ['./dialog-add-killer.component.css']
})
export class DialogAddKillerComponent  {
  killer: killers = new killers();
  constructor(public dialogRef: MatDialogRef<DialogAddKillerComponent>, @Inject(MAT_DIALOG_DATA) public data: killers,
              private  killersService: KillersService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  addKiller() {
       this.killersService.addKiller(this.killer).subscribe(data => console.log(data), error => console.log(error));
       this.killer = new killers();
  }

}
