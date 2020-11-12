import { Component, OnInit } from '@angular/core';
import { ServiceLog } from '../services/service.log';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  /* variables headers */
  log: any;
  menuData: boolean = false;

  logOutSingin() {
    const preuve: boolean = this.cookieService.check('idusercookie');
    if (preuve) {
      this.log = 'Se deconnecter';
    } else {
      this.log = 'Se connecter';
    }
  }

  onMenu() {
    if (this.menuData) {
      return (this.menuData = false);
    } else {
      return (this.menuData = true);
    }
  }
  onDeco() {}
  constructor(
    private servLog: ServiceLog,
    private cookieService: CookieService
  ) {}
  deconnecter() {
    this.servLog.deconnecter();
  }
  ngOnInit(): void {
    this.logOutSingin();
  }
}
