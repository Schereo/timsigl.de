import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './utility/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { UserSettingsComponent } from './user/user-settings/user-settings.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { LegalinformationComponent } from './footer/legalinformation/legalinformation.component';
import { ContactComponent } from './utility/contact/contact.component';
import { ArticleComponent } from './article/article.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { OverviewArticleComponent } from './article/overview-article/overview-article.component';
import { EditArticleComponent } from './article/edit-article/edit-article.component';
import { DetailArticleComponent } from './article/detail-article/detail-article.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserSettingsComponent },
    { path: 'signup', component: UserSignupComponent},
    { path: 'login', component: UserLoginComponent},
    { path: 'privacy', component: PrivacyComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'legalinfo', component: LegalinformationComponent},
    { path: 'article',
        component: ArticleComponent,
        // canActivate: [AuthGuardService],
        children: [
            { path: 'create', component: CreateArticleComponent},
            { path: 'overview', component: OverviewArticleComponent},
            { path: 'edit', component: EditArticleComponent}
        ]
    },
    { path: 'article/:url', component: DetailArticleComponent},
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
