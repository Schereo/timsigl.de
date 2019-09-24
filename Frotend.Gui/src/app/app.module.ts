import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './utility/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
    BlogComponent
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
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
