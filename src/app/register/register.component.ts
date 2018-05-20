import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MyErrorStateMatcher } from '../validators/MyErrorStateMatcher';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('', [
    Validators.required
  ]);

  password = new FormControl('', [
    Validators.required
  ]);

  name = new FormControl('', [
    Validators.required
  ]);


  matcher = new MyErrorStateMatcher();

  constructor(public auth: AuthService) {
 }

  ngOnInit() {
  }

  register() {
    this.auth.register(this.username.value, this.password.value, this.name.value);
  }
}
