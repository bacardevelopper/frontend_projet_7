import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceLog } from './services/service.log'
/* importation du module router */
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { FeedComponent } from './feed/feed.component';
/* un array qui contient le chemin et le component qui correspond */
const appRoutes: Routes = [
  { path: 'login' , component: LoginComponent},
  { path: 'signup' , component: SignupComponent},
  { path: 'forum' , component: FeedComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),FormsModule
  ],
  providers: [ServiceLog],
  bootstrap: [AppComponent]
})
export class AppModule { }
