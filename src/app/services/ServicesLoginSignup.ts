import { Component, Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
// importer http client
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SerivceInscConnex {
  // subject (données et bastraction)
  identifiantSbject = new Subject<any[]>();

  // array des données
  private identifiants = [];

  // injection dans le constructor
  constructor(private http: HttpClient) {}

  ngOnInit() {}

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

  // METHODE POST VERS SIGNIN BACKEND
  signin(data: any) {
    // faire requete POST au SERVER
    this.http.post('http://localhost:3000/home/login', data).subscribe(
      (dataRes) => {
        console.log('envoit terminer : ' + JSON.stringify(dataRes));
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
