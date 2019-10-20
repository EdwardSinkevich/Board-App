import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Injectable()
export class AuthService {

  constructor(private loginService: LoginService) { }

  public login(userName: string, password: string) {
    this.loginService.setUserInfo(userName, password);
  }
}
