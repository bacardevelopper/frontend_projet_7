import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
// importer http client
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  token: any = this.cookie.get('idusercookie');
  profileRequete() {
    let formData = new FormData();
    formData.append('cookie', JSON.stringify(this.token));
    this.http.post('http://localhost:3000/home/profile', formData).subscribe(
      (reponse) => {
        console.log(reponse);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  constructor(private cookie: CookieService, private http: HttpClient) {}

  ngOnInit(): void {
    this.profileRequete();
  }
}
