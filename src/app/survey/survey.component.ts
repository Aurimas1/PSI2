import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Survey } from '../models/survey';
import { SurveyService } from './survey.service';
import { ToastsManager } from 'ng2-toastr';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  fitForActivity: boolean;
  enjoyActivity: number;
  friends: {name: string, been: boolean}[] = [];

  private id: string;

  constructor(route: ActivatedRoute, private service: SurveyService, private toastr: ToastsManager, private router: Router) {
    route.params.subscribe( params => {
      service.getById(params.id).subscribe(result => {
        this.friends = result.friends.map(x => ({name: x, been: false}));
      });
      this.id = params.id;
    } );
  }

  ngOnInit() {
  }

  endSurvey(): void {
    this.service.saveSurvey(this.id, this.friends, this.fitForActivity, this.enjoyActivity, '')
      .then(() => this.showSuccess());
  }

  private showSuccess() {
    this.toastr.success('Jūsų apklausa sėkmingai užpildyta!');
    this.router.navigateByUrl('/');
  }

}
