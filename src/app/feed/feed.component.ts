import { Component, OnInit } from '@angular/core';
import { ServiceLog } from '../services/service.log';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  /* VARIABLES */
  cookieValue: any = this.cookies.get('idusercookie');
  data: any;
  uploadedFiles: Array<File>;
  /* VARIABLES */
  /* recuperation du fichier */
  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  postArticles(form: NgForm) {
    /* VARIABLES */
    this.data = form.value;
    let formData = new FormData();
    formData.append('file', this.uploadedFiles[0], this.uploadedFiles[0].name);
    
    const fileData = formData.get('file');
    const datForReq = { token : this.cookieValue , data: this.data };

    formData.append('cookie', JSON.stringify(this.cookieValue))
    formData.append('data', JSON.stringify(this.data));
    console.log(datForReq);
    console.log(fileData);
    /* VARIABLES */
    
    this.http.post<any>('http://localhost:3000/home/create', formData).subscribe(
      (reponse) => {
        console.log(reponse);
      },
      (error) => {
        console.log(error);
      }
    );
    
  }

  constructor(private cookies: CookieService, private http: HttpClient) {}

  ngOnInit(): void {}

}
