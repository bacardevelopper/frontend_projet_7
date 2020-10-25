import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
// importer http client
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
//
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
//
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
  //
  onModifyMdp(form: NgForm) {
    let formData = new FormData();
    const data = form.value;
    formData.append('cookie', JSON.stringify(this.token));
    formData.append('mdp', JSON.stringify(form.value.mdp));
    if(form.value.mdp !== ""){
      this.http
      .put('http://localhost:3000/home/modifier/mdp', formData)
      .subscribe(
        (reponse) => {
          console.log(reponse);
        },
        (error) => {
          console.log(error);
        }
      );
    }else{
      console.log("champ vide");
    }
    
    console.log(data);

  }
  /* suppression utilisateur */
  deleteUser(){
    let formData = new FormData();
    formData.append('cookie', JSON.stringify(this.token));
    this.http.post('http://localhost:3000/home/delete/user', formData).subscribe(
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
