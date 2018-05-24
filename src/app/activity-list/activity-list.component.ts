import { Component, OnInit } from '@angular/core';
import { ActivityService } from './activity.service';
import { Observable } from 'rxjs/Observable';
import { Activity } from '../models/activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities$: Observable<Activity[]>;

  constructor(public service: ActivityService) {
    this.activities$ = service.getList();
  }

  ngOnInit() {
  }

}
