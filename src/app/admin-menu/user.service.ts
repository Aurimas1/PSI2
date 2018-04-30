import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UserService {

  private readonly users: User[] = [
    {username: 'Diana'},
    {username: 'Audrius'},
    {username: 'Aurimas', role: 'admin'}
  ];

  constructor() { }

  getList(): Observable<User[]> {
    return Observable.of(this.users);
  }
}
