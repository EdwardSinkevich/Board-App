import { Injectable } from '@angular/core';
import { CanLoad, Router, CanActivate } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}

  canLoad(): boolean {
    return this.isAuthenticated();
  }

  canActivate(): boolean  {
    return this.isAuthenticated();
  }

  private isAuthenticated(): boolean {
    const userInfo = this.loginService.getUserInfo();
    if (!userInfo) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
