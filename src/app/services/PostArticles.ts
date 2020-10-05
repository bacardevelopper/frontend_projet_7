import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Component, Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
/*    ----------------------------------------------- */
import { HttpParams } from '@angular/common/http';
// import { NgForm,  FormControl } from '@angular/forms';
import { Upload } from './upload';

@Injectable()
export class PostAndGetArticles {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private uplUp: Upload
  ) {}

  token: any = this.cookieService.get('idusercookie');
  tokenJson = { tokenReq: this.token };
  arrayDataGet: any;
  // POST ET AUTH ( avec le token )
  getPost() {
    this.http
      .post('http://localhost:3000/home/read/all', {token : this.tokenJson })
      .subscribe(
        (dataRes) => {
          this.arrayDataGet = JSON.stringify(dataRes);
          console.log('token : ' + this.token);
          console.log('envoit terminer : ' + JSON.stringify(dataRes));
          localStorage.setItem('feed',JSON.stringify(dataRes));
          console.table(this.arrayDataGet);
        },
        (error) => {
          console.log(error);
          
        }
      );
  }
  // REQUETE DATA POUR AFFICHER

  // POST ET AUTH ( avec le token )
  userPost(data) {
    const headers = new HttpHeaders();
    /* -- parametrage accepeter json et formdata */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    /* -- parametrage accepeter json et formdata -- */
    this.http
      // on envoit le token au server
      .post<any>(
        'http://localhost:3000/home/create',
        {
          token: this.tokenJson,
          data,
          file: this.uplUp.fichierEncours,
          /* -- parametrage accepeter json et formdata */
        },
        { headers: headers }
      )
      // listen observable
      .subscribe(
        // datRes contient la reponse du serveur
        (dataRes) => {
          // si tout va bien
          console.log('token : ' + this.token);
          console.log('envoit terminer : ' + JSON.stringify(dataRes));
          console.log(data);
          console.log('fichier : ' + this.uplUp.fichierEncours);
        },
        (error) => {
          // erreur d'enregistrement
          console.log(error);
        }
      );
  }
}
