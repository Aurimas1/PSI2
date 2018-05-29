import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Report } from '../../../models/report';
import { ReportService } from '../report-list.service';

@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.css']
})
export class ReportDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Report,
    private service: ReportService
  ) { }

  ngOnInit() {
  }

  removeReport(): void {
    this.service.removeElement(this.data);
    this.dialogRef.close();
  }

}
