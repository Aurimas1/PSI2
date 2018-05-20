import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-activity-dialog',
  templateUrl: './add-activity-dialog.component.html',
  styleUrls: ['./add-activity-dialog.component.css']
})
export class AddActivityDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddActivityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}) { }

  ngOnInit() {
  }

}
