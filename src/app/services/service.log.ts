import { Component, Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
// importer http client
import { HttpClient } from '@angular/common/http';
/* importation du router */
import { Router } from '@angular/router';
@Injectable()

export class ServiceLog {
  // 
  leToken: any;
  useremail: any;
  // injection dans le constructor
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}
  
  ngOnInit() {}
  /* --------------------------------------------------------------------- */
  // METHODE POST VERS SIGNUP BACKEND
  signup(data: any) {
    this.http
      .post('http://localhost:3000/home/signup', data)

      .subscribe(
        (dataRes) => {
          console.log('envoit terminer : ' + JSON.stringify(dataRes));
        },
        (error) => {
          console.log(error);
        }
      );
  }
  /* -------------------------------------------------------- */
  // METHODE POST VERS SIGNIN BACKEND
  signin(data: any) {
    this.http.post('http://localhost:3000/home/login', data).subscribe(
      (dataRes) => {
        this.leToken = dataRes;
        console.log(data);
        console.log(
          'envoit terminer : ' + JSON.stringify(this.leToken.userToken)
        );
        this.cookieService.set('idusercookie', this.leToken.userToken);
        document.location.replace('http://localhost:4200/login');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  /* -------------------------------------------------------- */
  deconnecter(){
    this.cookieService.delete('idusercookie');
    document.location.replace('http://localhost:4200/login');
    localStorage.removeItem('feed');
  }
}
