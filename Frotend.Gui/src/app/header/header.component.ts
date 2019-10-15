import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/_services/login.service';
import { LoginUser } from '../_models/loginUser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;

  constructor(public loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.userSub = this.loginService.user.subscribe(user => {
      this.loginService.isLoggedIn = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onSubmit(user: LoginUser) {
    this.loginService.loginUser(user).subscribe(
      (ans) => {
        console.log(ans);
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onLogout() {
    this.loginService.logoutUser().subscribe(
      (ans) => {
        console.log(ans);
        this.loginService.user.next(null);
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      }
    );
  }



}
