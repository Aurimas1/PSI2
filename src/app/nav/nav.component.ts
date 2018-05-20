import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { MatDialog } from '@angular/material';
import { AddActivityDialogComponent } from './add-activity-dialog/add-activity-dialog.component';
import { SurveyService } from '../survey/survey.service';
import { Observable } from 'rxjs/Observable';
import { Survey } from '../models/survey';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public doughnutChartLabels = ['Dalyvavote'];
  public doughnutChartData = [75, 100 - 75];
  public doughnutChartType = 'doughnut';

  surveyList$: Observable<Survey[]>;

  constructor(public auth: AuthService, private dialog: MatDialog, surveyService: SurveyService) {
    const timmer = setInterval(
      () => {
        if (auth.isLogedin()) {
          this.surveyList$ = surveyService.getList().map(x => x.filter(y => y.taken === false));
          clearInterval(timmer);
        }
      }, 100
    );
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }



  ngOnInit() {
  }

  onAddActivityClick(): void {
    this.dialog.open(AddActivityDialogComponent, {});
  }

}
