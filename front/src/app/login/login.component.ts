import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceLog } from '../services/service.log';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // fonction d'inscription
  
  onSignin(form: NgForm) {
    let formData = new FormData();
    formData.append('user', JSON.stringify(form.value))
    const data = form.value;

    this.log.signin(formData);
  }
  constructor(private log: ServiceLog) { }

  ngOnInit(): void { }
}
