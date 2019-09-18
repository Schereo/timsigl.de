import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './utility-components/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home'},
    { path: 'home', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
