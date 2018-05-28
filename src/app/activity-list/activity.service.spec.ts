import { TestBed, inject } from '@angular/core/testing';

import { ActivityService } from './activity.service';
import { Mock } from 'ts-mocks';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../login/auth.service';
import { ToastsManager } from 'ng2-toastr';
import { Activity } from '../models/activity';

fdescribe('ActivityService', () => {

  let err: jasmine.Spy;

  const fakeActivity: Activity = {
    description: '_description',
    start: undefined,
    end: undefined,
    name: '_name',
    users: ['fakeUser']
  };

  beforeEach(() => {

    const afs = new Mock<AngularFirestore>();

    const auth = new Mock<AuthService>();
    auth.setup(x => x.username).is('fakeUser');

    const toast = new Mock<ToastsManager>();
    toast.setup(x => x.error).is(x => Promise.resolve<any>({}));
    err = toast.spyOf(x => x.error);

    TestBed.configureTestingModule({
      providers: [ActivityService,
                  {provide: AngularFirestore, useValue: afs.Object},
                  {provide: AuthService, useValue: auth.Object},
                  {provide: ToastsManager, useValue: toast.Object}]
    });
  });

  it('should be created', inject([ActivityService], (service: ActivityService) => {
    expect(service).toBeTruthy();
  }));

  it('joinActivity should show error if you allready in it', inject([ActivityService], (service: ActivityService) => {
    service.joinActivity(fakeActivity);
    expect(err).toHaveBeenCalledTimes(1);
  }));
});
