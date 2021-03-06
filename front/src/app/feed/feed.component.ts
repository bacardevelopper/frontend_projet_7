import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  /* VARIABLES */
  temoin: boolean;
  nombreComment: any;
  cookieValue: any = this.cookies.get('idusercookie');
  data: any;
  uploadedFiles: Array<File>;
  forum: any;
  dataComment: any;
  show: boolean = false;
  /* VARIABLES */

  /* recuperation du fichier */
  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  notShow() {
    this.show = false;
  }
  postArticles(form: NgForm) {
    /* VARIABLES */
    this.data = form.value;
    let formData = new FormData();
    formData.append('file', this.uploadedFiles[0], this.uploadedFiles[0].name);

    formData.append('cookie', JSON.stringify(this.cookieValue));
    formData.append('data', JSON.stringify(this.data));
    /* VARIABLES */

    this.http
      .post<any>('http://localhost:3000/home/create', formData)
      .subscribe(
        (reponse) => {
          // console.log(reponse);
          this.dataComment = reponse;
          alert('article bien posté : en cours de moderation');
          document.location.replace('http://localhost:4200/forum');
        },
        (error) => {
          //console.log(error);
        }
      );
  }
  getAllPost() {
    let formData = new FormData();
    formData.append('cookie', JSON.stringify(this.cookieValue));

    this.http.post('http://localhost:3000/home/read/all', formData).subscribe(
      (reponse) => {
        //console.log(reponse);
        this.temoin = true;
        this.forum = reponse;
      },
      (error) => {
        this.temoin = false;
        //console.log(error);
        alert('non connecté : redirection');
        document.location.replace('http://localhost:4200/login');
      }
    );
  }

  postComment(form: NgForm, evt) {
    let target = evt.target || evt.srcElement || evt.currentTarget;
    let idAtt = target.attributes.id;
    let value = idAtt.nodeValue;
    /* -------------------------------------- */
    const dataNumb = Number(value);
    //console.log(dataNumb);
    //console.log(form.value);
    /* poster le commentaire */
    let formData = new FormData();
    formData.append('cookie', JSON.stringify(this.cookieValue));
    formData.append('commentaire', JSON.stringify(form.value.commentaire));
    formData.append('idArticle', JSON.stringify(dataNumb));

    this.http.post('http://localhost:3000/home/comment', formData).subscribe(
      (reponse) => {
        // console.log(reponse);
        alert('commentaire bien ajouté');
        document.location.replace('http://localhost:4200/forum');
      },
      (error) => {
        //console.log(error);
        alert('erreur : sur le post de commentaire');
      }
    );
  }

  getComment(evt) {
    let target = evt.target || evt.srcElement || evt.currentTarget;
    let idAtt = target.attributes.id;
    let value = idAtt.nodeValue;
    const dataNumb = Number(value);
    let formData = new FormData();
    formData.append('cookie', JSON.stringify(this.cookieValue));
    formData.append('idcmt', JSON.stringify(dataNumb));
    // console.log(dataNumb);
    /* -------------------------------------- */
    this.http
      .post('http://localhost:3000/home/get/comment', formData)
      .subscribe(
        (reponse) => {
          console.log(reponse);
          this.show = true;
          this.dataComment = reponse;
        },
        (error) => {
          // console.log(error);
        }
      );
  }
  constructor(private cookies: CookieService, private http: HttpClient) {}

  ngOnInit(): void {
    this.cookies.delete('idmodify');
    this.getAllPost();
  }
}
