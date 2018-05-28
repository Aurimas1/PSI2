import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Collections } from '../../enums/collections.enum';
import { Report } from '../../models/report';

@Injectable()
export class ReportListService {

  constructor(private afs: AngularFirestore) { }

  getList(): Observable<Report[]> {
    return this.afs.collection<Report>(Collections.Reports).snapshotChanges().map(actions => {
      return actions.map(x => {
        const element = x.payload.doc.data() as Report;
        element.Id = x.payload.doc.id;
        return element;
      });
    });
  }

  removeElement(element: Report) {
    if (element.Id) {
      this.afs.doc<Report>(`${Collections.Reports}/${element.Id}`).delete();
    }

  }
}
