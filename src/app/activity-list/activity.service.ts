import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Activity } from '../models/activity';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../login/auth.service';
import { Collections } from '../enums/collections.enum';
import { ToastsManager } from 'ng2-toastr';

@Injectable()
export class ActivityService {

  constructor(private afs: AngularFirestore, private auth: AuthService, private toast: ToastsManager) { }

  getList(): Observable<Activity[]> {
    return this.afs.collection<Activity>(Collections.Activity)
    .snapshotChanges().map(actions => {
      return actions.map(x => {
        const element = x.payload.doc.data() as Activity;
        element.fireId = x.payload.doc.id;
        return element;
      });
    });
  }

  getById(id: string): Observable<Activity> {
    return this.afs.doc<Activity>(`${Collections.Activity}/${id}`)
    .snapshotChanges().map(x => {
      const element = x.payload.data() as Activity;
      element.fireId = x.payload.id;
      return element;
    });
  }

  createActivity(activity: Activity): Promise<any> {
    return this.afs.collection<Activity>(Collections.Activity).add(activity);
  }

  joinActivity(activity: Activity): Promise<void> {
    if (activity.users.find(x => x === this.auth.username)) {
      this.toast.error('Jūs jau dalyvaujate šitoje veikloje');
      return Promise.reject('User allready in activity');
    }
    return this.afs.doc<Activity>(`${Collections.Activity}/${activity.fireId}`)
      .update({users: activity.users.concat(this.auth.username)});
  }
}
