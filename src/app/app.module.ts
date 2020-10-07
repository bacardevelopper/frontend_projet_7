/* MODULES USES */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
/* importation du module router */
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ServiceLog } from './services/service.log';
import { HttpClientModule } from '@angular/common/http';
import { FeedComponent } from './feed/feed.component';
/* MODULES USES */
/* un array qui contient le chemin et le component qui correspond */
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forum', component: FeedComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    FeedComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [CookieService, ServiceLog],
  bootstrap: [AppComponent],
})
export class AppModule {}
