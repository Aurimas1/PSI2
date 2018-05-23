import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivityService } from '../../activity-list/activity.service';
import { Activity } from '../../models/activity';
import { ToastsManager } from 'ng2-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-activity-dialog',
  templateUrl: './add-activity-dialog.component.html',
  styleUrls: ['./add-activity-dialog.component.css']
})
export class AddActivityDialogComponent {

  name: string;
  description: string;
  place: string;
  start: Date;
  end: Date;
  friends: string;

  constructor(
    public dialogRef: MatDialogRef<AddActivityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {},
    private service: ActivityService,
    private toast: ToastsManager,
    private router: Router
  ) { }

  createActivity() {
    const activity: Activity = {
      users: this.friends.split('\n').map(x => x.trim()),
      description: this.description,
      name: this.name,
      start: this.start as any, // Timestamp.fromDate(this.start),
      end: this.end as any // Timestamp.fromDate(this.end)
    };
    this.service.createActivity(activity)
      .then(() => this.toast.success('Jūsų veikla sėkmingai sukurta!'))
      .then(() => this.router.navigate(['']))
      .then(() => this.dialogRef.close());
  }

}
