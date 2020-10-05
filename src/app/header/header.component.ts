import { Component, OnInit } from '@angular/core';
import { SerivceInscConnex } from '../services/ServicesLoginSignup';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu:boolean = true;
  menuData:boolean;
  log = "Se deconnecter";
  
  onMenu(){
    if(this.menuData){
      return this.menuData = false;
    }else{
      return this.menuData = true;
    }

  }

  onDeco(){
    this.service.deconnecter();
  }
  constructor(private service : SerivceInscConnex) { }

  ngOnInit(): void {
  }

}
