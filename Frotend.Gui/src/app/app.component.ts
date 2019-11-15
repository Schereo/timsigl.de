import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { LoginService } from './_services/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userSub: Subscription;

  constructor(public loginService: LoginService,
    private router: Router) {}

  ngOnInit() {
    this.loginService.autoLoginUser();
    this.userSub = this.loginService.user.subscribe(user => {
      this.loginService.isLoggedIn = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.loginService.logoutUser().subscribe(
      () => {
        this.loginService.isLoggedIn = false;
        this.router.navigate(['/home']);
      });
  }
}
