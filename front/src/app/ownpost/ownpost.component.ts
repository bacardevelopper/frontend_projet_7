import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
// importer http client
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ownpost',
  templateUrl: './ownpost.component.html',
  styleUrls: ['./ownpost.component.scss']
})
export class OwnpostComponent implements OnInit {
  cookieValue: any = this.cookie.get('idusercookie');
  constructor(private cookie : CookieService, private http : HttpClient) { }
  ownPost(){
    let formData = new FormData();
    formData.append('cookie', JSON.stringify(this.cookieValue));
    this.http.post('http://localhost:3000/home/own/post', formData).subscribe(
      (reponse) =>{
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

}
