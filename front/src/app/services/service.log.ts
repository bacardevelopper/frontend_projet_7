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
  token: any = this.cookieService.get('idusercookie');
  tokenJson = this.token;
  arrayDataGet: any;

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
          document.location.replace('http://localhost:4200/login');
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
        document.location.replace('http://localhost:4200/forum');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  /* -------------------------------------------------------- */
  deconnecter() {
    document.location.replace('http://localhost:4200/login');
    this.cookieService.delete('idusercookie');
    document.location.replace('http://localhost:4200/login');
  }
  /* -------------------------------------------------------- */
  getPost() {
    let formData = new FormData();
    formData.append('token', this.token);
    this.http.post('http://localhost:3000/home/read/all', formData).subscribe(
      (dataRes) => {
        this.arrayDataGet = JSON.stringify(dataRes);
        console.log('token : ' + this.token);
        console.log('envoit terminer : ' + JSON.stringify(dataRes));
        localStorage.setItem('feed', JSON.stringify(dataRes));
        console.table(this.arrayDataGet);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  dataNumb: any;
  update(evt) {
    console.log(evt);
    let target = evt.target || evt.srcElement || evt.currentTarget;
    let idAtt = target.attributes.id;
    let value = idAtt.nodeValue;
    console.log(typeof value);
    console.log(value);
    this.dataNumb = Number(value);
    console.log(this.dataNumb);
    this.cookieService.delete('idmodify');
    document.location.replace('http://localhost:4200/posts/modify');
    this.cookieService.set('idmodify', this.dataNumb);
  }
}
