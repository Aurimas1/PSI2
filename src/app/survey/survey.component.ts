import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  friends = [{name: 'Aurimas Laureckis'}, {name: 'Diana'}];
  someBool: boolean;
  something: number;

  constructor() { }

  ngOnInit() {
  }

}
