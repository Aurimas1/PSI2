import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs/Observable';
import { Survey } from '../models/survey';
import { Collections } from '../enums/collections.enum';

@Injectable()
export class SurveyService {

  constructor(private afs: AngularFirestore, private auth: AuthService) { }

  getList(): Observable<Survey[]> {
    return this.afs.collection<Survey>(Collections.Survey, x => x.where('id', '==', this.auth.uid)).valueChanges();
  }
}
