import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ServiceLog } from '../services/service.log';
// importer http client
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ownpost',
  templateUrl: './ownpost.component.html',
  styleUrls: ['./ownpost.component.scss'],
})
export class OwnpostComponent implements OnInit {
  cookieValue: any = this.cookie.get('idusercookie');
  posts: any;
  constructor(private cookie: CookieService, private http: HttpClient, private router : Router, private servLog : ServiceLog) {}
  /* ----------------------------------------------------------------------*/
  ownPost() {
    let formData = new FormData();
    formData.append('cookie', JSON.stringify(this.cookieValue));
    this.http.post('http://localhost:3000/home/own/post', formData).subscribe(
      (reponse) => {
        console.log(reponse);
        this.posts = reponse;
      },
      (error) => {
        console.log(error);
      }
    );
  }
 
  /* ----------------------------------------------------------------- */
  // suppression de l'article : recuperation de l'id de type string
  delete(evt) {
    console.log(evt);
    let target = evt.target || evt.srcElement || evt.currentTarget;
    let idAtt = target.attributes.id;
    let value = idAtt.nodeValue;
    console.log(typeof value);
    console.log(value);
    const dataNumb = Number(value);
    console.log(dataNumb);
    let formData = new FormData();
    formData.append('cookie', JSON.stringify(this.cookieValue));
    formData.append('delete', JSON.stringify(dataNumb));
    // convertir la valeur pour supprimer le post du user concerner
    this.http.post('http://localhost:3000/home/delete', formData).subscribe(
      (reponse) => {
        console.log(reponse);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.ownPost();
  }

   mdf(evt){
    this.servLog.update(evt);
  }
}
