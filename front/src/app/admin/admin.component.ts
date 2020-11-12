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
  temoin:boolean;
  lastU: any;
  nbrComent: any;
  nbrArtc: any;
  nbr: any;
  forum: any;
  cookieValue: any = this.cookie.get('idusercookie');
  constructor(private http: HttpClient, private cookie: CookieService) {}

  ngOnInit(): void {
    this.getAllPost();
    this.recupStats();
  }
  /* ----------------------------------------------------------------------------------- */
  getAllPost() {
    let formData = new FormData();
    formData.append('cookie', JSON.stringify(this.cookieValue));

    this.http.post('http://localhost:3000/home/admin/all', formData).subscribe(
      (reponse) => {
        this.temoin = true;
        //console.log(reponse);
        this.forum = reponse;
      },
      (error) => {
        this.temoin = false;
        //console.log(error);
      }
    );
  }
  /* ----------------------------------------------------------------------------------- */
  dataNumb: any;
  moderation(event) {
    let formData = new FormData();
    formData.append('cookie', JSON.stringify(this.cookieValue));
    //console.log(event);
    let target = event.target || event.srcElement || event.currentTarget;
    let idAtt = target.attributes.id;
    let value = idAtt.nodeValue;
    this.dataNumb = Number(value);
    formData.append('moderer', JSON.stringify(this.dataNumb));

    this.http.post('http://localhost:3000/home/moderer', formData).subscribe(
      (reponse) => {
        //console.log(reponse);
        document.location.replace('http://localhost:4200/forum');
      },
      (error) => {
        //console.log(error);
      }
    );
  }

  /* les statistiques */
  recupStats() {
    let formData = new FormData();
    formData.append('cookie', JSON.stringify(this.cookieValue));
    this.http.post('http://localhost:3000/home/stats', formData).subscribe(
      (reponse) => {
        console.log(reponse);
        this.nbr = reponse;
        this.nbrArtc = this.nbr.nbr;
        this.nbrComent = this.nbr.nbrComent;
        this.lastU = this.nbr.users;
        
        console.log(this.lastU);
      },
      (error) => {
        alert('vous etes pas admin ou non connecté');
        document.location.replace('http://localhost:4200/login');
        //console.log(error);
      }
    );
  }
}
