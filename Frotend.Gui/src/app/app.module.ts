import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './utility/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { UserSettingsComponent } from './user/user-settings/user-settings.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { LoginService } from './_services/login.service';
import { LoadingSpinnerComponent } from './utility/loading-spinner/loading-spinner.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { LegalinformationComponent } from './footer/legalinformation/legalinformation.component';
import { ContactComponent } from './utility/contact/contact.component';
import { BlogComponent } from './home/blog/blog.component';
import { AuthInterceptorService } from './_services/auth-interceptor.service';
import { AuthGuardService } from './_services/auth-guard.service';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { ArticleComponent } from './article/article.component';
import { SkillsComponent } from './home/skills/skills.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { EditArticleComponent } from './article/edit-article/edit-article.component';
import { OverviewArticleComponent } from './article/overview-article/overview-article.component';
import { RoleGuardService } from './_services/role-guard.service';
import { MailService } from './_services/mail.service';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { DetailArticleComponent } from './article/detail-article/detail-article.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    UserSettingsComponent,
    UserSignupComponent,
    LoadingSpinnerComponent,
    PrivacyComponent,
    LegalinformationComponent,
    ContactComponent,
    BlogComponent,
    CreateArticleComponent,
    ArticleComponent,
    SkillsComponent,
    UserLoginComponent,
    EditArticleComponent,
    OverviewArticleComponent,
    DetailArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [LoginService,
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
  AuthGuardService, RoleGuardService, MailService,
  { provide: LOCALE_ID, useValue: 'de' }],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    registerLocaleData(localeDe);
  }
 }
