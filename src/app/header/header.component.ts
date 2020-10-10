import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
}
