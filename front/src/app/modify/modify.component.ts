import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NgForm } from '@angular/forms';
// importer http client
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss'],
})
export class ModifyComponent implements OnInit {
  /* ----- */
  cookieValue: any = this.cookie.get('idusercookie');
  cookieArt: any = this.cookie.get('idmodify');
  data: any;
  uploadedFiles: Array<File>;
  constructor(private cookie: CookieService, private http: HttpClient) {}

  ngOnInit(): void {
    this.recupererData();
  }
  ngOnDestroy() {
    this.cookie.delete('idmodify');
  }
  fileChange(element) {
    this.uploadedFiles = element.target.files;
    console.log(this.uploadedFiles);
  }
  postModify(form: NgForm) {
    let formData = new FormData();
    this.data = form.value;

    formData.append('cookie', JSON.stringify(this.cookieValue));
    formData.append('data', JSON.stringify(this.data));
    formData.append('idarticle', JSON.stringify(this.cookieArt));
    console.log(form.value);
    //console.log(this.uploadedFiles[0]);

    // verification si un fichier existe
    if (this.uploadedFiles) {
      formData.append(
        'file',
        this.uploadedFiles[0],
        this.uploadedFiles[0].name
      );
    } else {
      console.log('pas de fichier');
    }

    this.http.put<any>('http://localhost:3000/home/update', formData).subscribe(
      (reponse) => {
        console.log(reponse);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // recuperer data
  titre: string;
  texte: string;
  recupererData() {
    let formData = new FormData();
    formData.append('cookie', JSON.stringify(this.cookieValue));
    formData.append('idarticle', JSON.stringify(this.cookieArt));
    if (this.cookieValue) {
      this.http.post('http://localhost:3000/home/updt', formData).subscribe(
        (reponse) => {
          console.log(reponse[0]);
          this.titre = reponse[0].titre;
          this.texte = reponse[0].texte;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('error');
    }
  }
}
