import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Activity } from '../models/activity';
import 'rxjs/add/observable/of';

@Injectable()
export class ActivityService {

  private readonly fakeActivities: Activity[] = [{
    Name: 'Valgymas',
    Description: 'Vegetariškas maistas',
    PersonCount: 2
  }, {
    Name: 'Gėrimas',
    Description: 'Bare šnekutis',
    PersonCount: 5
  }];

  constructor() { }

  getList(): Observable<Activity[]> {
    return Observable.of(this.fakeActivities);
  }
}
