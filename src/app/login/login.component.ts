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
    const data = form.value;
    this.servLog.signin(data);

  }
  constructor(private servLog : ServiceLog) {}

  ngOnInit(): void {}
}
