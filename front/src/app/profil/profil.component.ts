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
  temoin:boolean;
  pseudo: any;
  token: any = this.cookie.get('idusercookie');
  profileRequete() {
    let formData = new FormData();
    formData.append('cookie', JSON.stringify(this.token));
    this.http.post('http://localhost:3000/home/profile', formData).subscribe(
      (reponse) => {
        //console.log(reponse);
        this.temoin = true;
        this.pseudo = reponse;
      },
      (error) => {
        //console.log(error);
        this.temoin = false;
        alert('non connécté redirection');
        document.location.replace('http://localhost:4200/login');
      }
    );
  }
  // modification mot de passe
  onModifyMdp(form: NgForm) {
    let formData = new FormData();
    const data = form.value;
    formData.append('cookie', JSON.stringify(this.token));
    formData.append('mdp', JSON.stringify(form.value.mdp));
    if (form.value.mdp !== '') {
      this.http
        .put('http://localhost:3000/home/modifier/mdp', formData)
        .subscribe(
          (reponse) => {
            alert('redirection pour vous reconnecter');
            this.cookie.delete('idusercookie');
            document.location.replace('http://localhost:4200/login');
            //console.log(reponse);
          },
          (error) => {
            //console.log(error);
          }
        );
    } else {
      alert('cham vide');
      //console.log('champ vide');
    }

    // console.log(data);
  }
  // modification pseudo
  onModifyPseudo(form: NgForm) {
    let formData = new FormData();
    formData.append('cookie', JSON.stringify(this.token));
    formData.append('pseudo', JSON.stringify(form.value.pseudo));

    if (form.value.pseudo !== '') {
      this.http
        .put('http://localhost:3000/home/updt/profile', formData)
        .subscribe(
          (reponse) => {
            //console.log(form.value.pseudo);
            //console.log(reponse);
            alert('Modifier pseudo');
            document.location.replace('http://localhost:4200/profil');
          },
          (error) => {
            alert('erreur modification pseudo');
            //console.log(error);
          }
        );
    } else {
      alert('champ pseudo vide');
      //console.log('champ pseudo vide');
    }
  }
  /* suppression utilisateur */
  deleteUser() {
    let formData = new FormData();
    formData.append('cookie', JSON.stringify(this.token));
    this.http
      .post('http://localhost:3000/home/delete/user', formData)
      .subscribe(
        (reponse) => {
          //console.log(reponse);
          this.cookie.delete('idusercookie');
          document.location.replace('http://localhost:4200/signup');
        },
        (error) => {
          alert(
            'erreur suppression utilisateur verifier que vous etes connecté'
          );
          //console.log(error);
        }
      );
  }
  constructor(private cookie: CookieService, private http: HttpClient) {}

  ngOnInit(): void {
    this.profileRequete();
  }
}
