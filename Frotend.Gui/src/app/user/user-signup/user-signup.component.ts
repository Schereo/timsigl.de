import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginUser } from 'src/app/_models/login-user';
import { LoginService } from 'src/app/_services/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit, OnDestroy {
  private userSub: Subscription;

  constructor(private loginService: LoginService,
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
    console.log(user);
    this.loginService.signupUser(user).subscribe(
      (ans) => {
        console.log(ans);
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
