import { Injectable } from '@angular/core';
import { IUserInfo } from '../models/userInfo';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private userInfo: IUserInfo;

  constructor() { }

  public setUserInfo(login: string, password: string) {
    const userInfo = {
      login,
      password,
    };

    this.userInfo = userInfo;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  public getUserInfo(): IUserInfo {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return this.userInfo;
  }

  public removeUserInfo() {
    localStorage.removeItem('userInfo');
    this.userInfo = null;
  }
}
