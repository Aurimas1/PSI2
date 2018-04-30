import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  get username(): string {
    return localStorage.getItem('username');
  }

  get role(): string {
    return localStorage.getItem('role');
  }

  isLogedin(): boolean {
    return !!localStorage.getItem('username');
  }

  login(username: string): void {
    if (username === 'admin') {
      localStorage.setItem('role', username);
    }
    localStorage.setItem('username', username);
  }

  logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
  }
}
