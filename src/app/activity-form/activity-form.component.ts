import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from '../validators/MyErrorStateMatcher';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {

  emptyFormConstrol = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private toastr: ToastsManager, private router: Router) {
 }

  ngOnInit() {
  }

  showSuccess() {
    this.toastr.success('Jūsų veikla sėkmingai sukurta!');
    this.router.navigateByUrl('/');
  }

}
