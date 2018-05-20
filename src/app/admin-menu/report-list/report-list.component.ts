import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ReportDialogComponent } from './report-dialog/report-dialog.component';
import { ReportListService } from './report-list.service';
import { Observable } from 'rxjs/Observable';
import { Report } from '../../models/report';
import { Timestamp } from '@firebase/firestore-types';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  reportList$: Observable<Report[]>;

  constructor(private dialog: MatDialog, private service: ReportListService) {
    this.reportList$ = service.getList();
  }

  ngOnInit() {
  }

  openReportDialog(element: Report): void {
    this.dialog.open(ReportDialogComponent, {data: element});
  }

  // #Delete
  onFakeClick() {
    this.service.addCopies();
  }

}
