import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceLog } from './services/service.log';
/* importation du module router */
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { FeedComponent } from './feed/feed.component';
import { OwnpostComponent } from './ownpost/ownpost.component';
import { ProfilComponent } from './profil/profil.component';
import { ModifyComponent } from './modify/modify.component';
import { AdminComponent } from './admin/admin.component';
import { AccueilComponent } from './accueil/accueil.component';
/* un array qui contient le chemin et le component qui correspond */
const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forum', component: FeedComponent },
  { path: 'posts', component: OwnpostComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'posts/modify', component: ModifyComponent },
  { path: 'admin', component: AdminComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    FeedComponent,
    OwnpostComponent,
    ProfilComponent,
    ModifyComponent,
    AdminComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [ServiceLog],
  bootstrap: [AppComponent],
})
export class AppModule {}
