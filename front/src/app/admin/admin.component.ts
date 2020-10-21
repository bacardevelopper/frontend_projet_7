import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
/* ----------------------------------------------------------------------------------- */
export class AdminComponent implements OnInit {
  forum: any;
  cookieValue: any = this.cookie.get('idusercookie');
  constructor(private http: HttpClient, private cookie: CookieService) {}

  ngOnInit(): void {
    this.getAllPost();
  }
  /* ----------------------------------------------------------------------------------- */
  getAllPost() {
    let formData = new FormData();
    formData.append('cookie', JSON.stringify(this.cookieValue));

    this.http.post('http://localhost:3000/home/admin/all', formData).subscribe(
      (reponse) => {
        console.log(reponse);
        this.forum = reponse;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  /* ----------------------------------------------------------------------------------- */
  dataNumb: any;
  moderation(event) {
    let formData = new FormData();
    formData.append('cookie', JSON.stringify(this.cookieValue));
    console.log(event);
    let target = event.target || event.srcElement || event.currentTarget;
    let idAtt = target.attributes.id;
    let value = idAtt.nodeValue;
    console.log(typeof value);
    console.log(value);
    this.dataNumb = Number(value);
    formData.append('moderer', JSON.stringify(this.dataNumb));

    this.http.post('http://localhost:3000/home/moderer', formData).subscribe(
      (reponse) => {
        console.log(reponse);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
