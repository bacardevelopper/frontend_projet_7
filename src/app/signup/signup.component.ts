import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SerivceInscConnex } from '../services/ServicesLoginSignup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent implements OnInit {

  // fonction d'inscription
  onSignup(form: NgForm){
    const data = form.value;
    // envoit vers le backend
    this.signup.signup(data);
    
  }

  // injection du service dans le constructor
  constructor(private signup : SerivceInscConnex) { }

  ngOnInit(): void {
  }

}
