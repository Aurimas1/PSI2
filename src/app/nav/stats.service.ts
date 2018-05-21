import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../login/auth.service';
import { Collections } from '../enums/collections.enum';
import { SurveyResult } from '../models/survey-result';
import 'rxjs/Rx';

@Injectable()
export class StatsService {

  constructor(private afs: AngularFirestore, private auth: AuthService) { }

  getStats(): Observable<number> {
    return this.afs.collection<SurveyResult>(Collections.SurveyResult).valueChanges()
      .map(x => {
        let trues = 0;
        const arr = x.map(y => y.friends).reduce((a, b) => a.concat(b))
              .filter(z => z.name === this.auth.username).map(c => c.been);
        arr.forEach(y => {
          if (y)
            trues++;
        });
        return trues * 100 / arr.length;
      });
  }
}
