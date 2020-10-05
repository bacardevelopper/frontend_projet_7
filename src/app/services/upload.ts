import { Injectable } from '@angular/core';

@Injectable()
export class Upload {
  // ATTACH IMAGE UPLOAD
  // 1 instaciation d'un objet subject de type any
  constructor(){}
  fichierEncours:any;
  
  uploadFile(event: any) {
    const file = event.target.files[0];
    const formdata = new FormData();
    formdata.append('file', file);
    console.log(file);
    return this.fichierEncours = formdata;
  }


}
