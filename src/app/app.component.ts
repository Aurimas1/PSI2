import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(toastr: ToastsManager, vcr: ViewContainerRef, afs: AngularFirestore) {
    toastr.setRootViewContainerRef(vcr);
    const firestore = afs.firestore;
    const settings = {timestampsInSnapshots: true};
    firestore.settings(settings);
 }
}
