import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ReportDialogComponent } from './report-dialog/report-dialog.component';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  fakeData = [
    {date: '2018-05-02', user: 'aurimas'},
    {date: '2018-05-03', user: 'audrius'}
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openReportDialog(element: {date: string, user: string}): void {
    this.dialog.open(ReportDialogComponent, {data: element});
  }

}
