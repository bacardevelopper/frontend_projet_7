import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Component, Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
// import { NgForm,  FormControl } from '@angular/forms';

@Injectable()
export class PostAndGetArticles {
  constructor(private http: HttpClient, private cookieService : CookieService) {}
  
  token: any = this.cookieService.get('idusercookie');
  tokenJson = {tokenReq : this.token};
  
  // POST ET AUTH ( avec le token )
  getPost() {
    // faire requete GET au SERVER
    this.http
    // on envoit le token au server
      .post('http://localhost:3000/home/read/all', this.tokenJson)
      // listen observable
      .subscribe(
        // datRes contient la reponse du serveur
        (dataRes) => {
          // si tout va bien
          console.log('token : '+this.token);
          console.log('envoit terminer : ' + JSON.stringify(dataRes));
        },
        (error) => {
          // erreur d'enregistrement
          console.log(error);
        }
      );
  }
}
