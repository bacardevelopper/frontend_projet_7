import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SerivceInscConnex } from '../services/ServicesLoginSignup';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {
    // fonction d'inscription
    onSignin(form: NgForm){
      const data = form.value;
      // envoit vers le backend
      this.signin.signin(data);
    }

  constructor(private signin : SerivceInscConnex) { }

  ngOnInit(): void {
  }

}
