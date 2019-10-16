import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  public userInfo;

  constructor() { }

  getUserInfo(): string {
    this.userInfo = localStorage.getItem('userInfo');
    return this.userInfo;
  }

  removeUserInfo() {
    localStorage.removeItem('userInfo');
    this.userInfo = null;
  }
}
