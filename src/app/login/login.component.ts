import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MyErrorStateMatcher } from '../validators/MyErrorStateMatcher';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emptyFormConstrol = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(public auth: AuthService) {
 }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.emptyFormConstrol.value);
  }

}
