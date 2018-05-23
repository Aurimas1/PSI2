import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '@firebase/auth-types';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';
import { Collections } from '../enums/collections.enum';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private user: User;

  constructor(private auth: AngularFireAuth, private router: Router) {
    auth.authState.subscribe(x => this.user = x);
  }

  get username(): string {
    return this.user ? this.user.displayName : undefined;
  }

  get role(): string {
    if (!this.user)
      return undefined;
    if (this.user.uid === 'eApw1Eg0Imh6XyBzBb5r2AvZj8W2')
      return 'admin';
    if (this.user.uid === 'SH5jNrXBg2OUJLSFo9Bsj6dGHbP2')
      return 'parthner';
    return 'user';
  }

  get foto(): string {
    return this.user ? this.user.photoURL : undefined;
  }

  get uid(): string {
    return this.user.uid;
  }

  addFotoUrl(url: string): Promise<void> {
    return this.user.updateProfile({displayName: this.user.displayName, photoURL: url});
  }

  isLogedin(): boolean {
    return !!this.user;
  }

  login(email: string, password: string): void {
    this.auth.auth.signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['']));
  }

  register(email: string, password: string, name: string): void {
    this.auth.auth.createUserWithEmailAndPassword(email, password)
      .then( (x: User) => x.updateProfile({displayName: name, photoURL: undefined}) )
      .then( () => this.router.navigate(['']) );
  }

  logout(): void {
    this.auth.auth.signOut()
      .then( () => this.router.navigate(['']) );
  }
}

