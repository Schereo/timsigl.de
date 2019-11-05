import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/_services/login.service';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/_models/loginUser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  private loginError = false;

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
    this.loginService.loginUser(user).subscribe(
      (ans) => {
        console.log(ans);
        this.router.navigate(['/home']);
        this.loginError = false;
      },
      (err) => {
        this.loginError = true;
      }
    );
  }
}
