import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Component, Injectable, OnInit } from '@angular/core';

@Injectable()
export class PostAndGetArticles {
  constructor(private http: HttpClient) {}

  getPost() {
    // faire requete POST au SERVER
    this.http
      .get('http://localhost:3000/home/read/all')
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
}
