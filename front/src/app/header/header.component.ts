import { Component, OnInit } from '@angular/core';
import { ServiceLog } from '../services/service.log';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  /* variables headers */
  log = 'Se deconnecter';
  menuData: boolean = false;

  onMenu() {
    if (this.menuData) {
      return (this.menuData = false);
    } else {
      return (this.menuData = true);
    }
  }
  onDeco() {
   
  }
  constructor( private servLog : ServiceLog) {}
  deconnecter(){
    this.servLog.deconnecter();
  }
  ngOnInit(): void {}
}
