import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceLog } from '../services/service.log';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  // fonction d'inscription
  onSignup(form: NgForm) {
    const data = form.value;
    this.SerLog.signup(data);
  }
  constructor(private SerLog : ServiceLog) {}

  ngOnInit(): void {}
}
