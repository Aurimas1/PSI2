import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Mock } from 'ts-mocks';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '@firebase/auth-types';

fdescribe('AuthService', () => {
  beforeEach(() => {

    const authState = new BehaviorSubject<User>({} as User);

    const auth = new Mock<AngularFireAuth>();
    auth.setup(x => x.authState).is(authState.asObservable());

    const router = new Mock<Router>();

    TestBed.configureTestingModule({
      providers: [AuthService,
                 {provide: AngularFireAuth, useValue: auth.Object},
                 {provide: Router, useValue: router.Object}]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
