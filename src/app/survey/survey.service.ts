import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs/Observable';
import { Survey } from '../models/survey';
import { Collections } from '../enums/collections.enum';
import { SurveyResult } from '../models/survey-result';

@Injectable()
export class SurveyService {

  constructor(private afs: AngularFirestore, private auth: AuthService) { }

  getList(): Observable<Survey[]> {
    return this.afs.collection<Survey>(Collections.Survey, x => x.where('id', '==', this.auth.uid)).snapshotChanges().map(actions => {
      return actions.map(x => {
        const element = x.payload.doc.data() as Survey;
        element.fireId = x.payload.doc.id;
        return element;
      });
    });
  }

  getById(id: string): Observable<Survey> {
    return this.afs.doc<Survey>(`${Collections.Survey}/${id}`).snapshotChanges().map(result => {
      const element = result.payload.data() as Survey;
      element.fireId = result.payload.id;
      return element;
    });
  }

  saveSurvey(id: string, friends: {name: string, been: boolean}[], fitForActivity: boolean, enjoyActivity: number, comment: string): Promise<void> {
    this.afs.doc<Survey>(`${Collections.Survey}/${id}`).update({taken: true});
    return this.afs.doc<SurveyResult>(`${Collections.SurveyResult}/${id}`).set({
      id: this.auth.uid,
      enjoyActivity: enjoyActivity,
      fitForActivity: fitForActivity,
      friends: friends,
      comment: comment
    });
  }

  addFriend(survey: Survey, friend: string): Promise<void> {
    return this.afs.doc<Survey>(`${Collections.Survey}/${survey.fireId}`).update({friends: survey.friends.concat(friend)});
  }
}
