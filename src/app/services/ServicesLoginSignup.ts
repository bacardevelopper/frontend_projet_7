import { Component, Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
// importer http client
import { HttpClient } from '@angular/common/http';
/* importation du router */
import { Router } from '@angular/router';
@Injectable()
export class SerivceInscConnex {
  // subject (données et bastraction)
  identifiantSbject = new Subject<any[]>();

  // array des données
  private identifiants = [];
  leToken: any;
  // injection dans le constructor
  constructor(private http: HttpClient, private cookieService: CookieService, private router : Router) {}

  ngOnInit() {}
  /* --------------------------------------------------------------------- */
  // METHODE POST VERS SIGNUP BACKEND
  signup(data: any) {
    
    // faire requete POST au SERVER
    this.http
      .post('http://localhost:3000/home/signup', data)
      // listen observable
      .subscribe(
        // on peut recuperer la reponse dans le subscribe
        (dataRes) => {
          // si tout va bien
          console.log('envoit terminer : ' + JSON.stringify(dataRes));
        },
        (error) => {
          // erreur d'enregistrement
          console.log(error);
        }
      );
  }
  /* -------------------------------------------------------- */
  // METHODE POST VERS SIGNIN BACKEND
  signin(data: any) {
    // faire requete POST au SERVER
    this.http.post('http://localhost:3000/home/login', data).subscribe(
      (dataRes) => {
        this.leToken = dataRes;
        console.log(data);
        // PARSER DATARESPONSE SERVER
        
        console.log('envoit terminer : ' + JSON.stringify(this.leToken.userToken));
        this.cookieService.set('idusercookie', this.leToken.userToken);

        document.location.replace('http://localhost:4200/feed');

      },
      (error) => {
        console.log(error);
      }
    );
  }
  /* -------------------------------------------------------- */
}
