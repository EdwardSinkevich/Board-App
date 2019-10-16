import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public router: Router, public loginService: LoginService) { }

  public logOut() {
    this.loginService.removeUserInfo();
    this.router.navigate(['/login']);
  }
}
