import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';

// on l'importe dans 
import { HttpClientModule } from '@angular/common/http';

// FormsModule
import { FormsModule } from "@angular/forms";

// mes services
import { SerivceInscConnex } from './services/ServicesLoginSignup';
import { SigninComponent } from './signin/signin.component';

/* importation du module router */
import { Routes, RouterModule } from '@angular/router';

/* un array qui contient le chemin et le component qui correspond */
const appRoutes: Routes = [
  { path: 'signup' , component: SignupComponent},
  { path: 'signin' , component: SigninComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SerivceInscConnex],
  bootstrap: [AppComponent]
})
export class AppModule { }
