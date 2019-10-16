import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  setUserInfo(name: string, password: string) {
    const userInfo = {
      name,
      password,
    };

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }
}
