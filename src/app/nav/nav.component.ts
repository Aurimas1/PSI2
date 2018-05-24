import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { MatDialog } from '@angular/material';
import { AddActivityDialogComponent } from './add-activity-dialog/add-activity-dialog.component';
import { SurveyService } from '../survey/survey.service';
import { Observable } from 'rxjs/Observable';
import { Survey } from '../models/survey';
import 'rxjs/add/operator/map';
import { StatsService } from './stats.service';
import { DiscountService } from '../create-discount/discount.service';
import { Discount } from '../models/discount';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  public doughnutChartLabels = ['Dalyvavote'];
  public doughnutChartData: number[] = undefined;
  public doughnutChartType = 'doughnut';

  surveyList$: Observable<Survey[]>;
  discounts$: Observable<Discount[]>;

  constructor(public auth: AuthService, private dialog: MatDialog, surveyService: SurveyService, stats: StatsService, discount: DiscountService) {
    const timmer = setInterval(
      () => {
        if (auth.isLogedin()) {
          this.surveyList$ = surveyService.getList().map(x => x.filter(y => y.taken === false));
          stats.getStats().subscribe(result => this.doughnutChartData = result ? [result, 100 - result] : undefined);
          clearInterval(timmer);
        }
      }, 100
    );
    this.discounts$ = discount.getList();
  }

  onAddActivityClick(): void {
    this.dialog.open(AddActivityDialogComponent, {});
  }

}
