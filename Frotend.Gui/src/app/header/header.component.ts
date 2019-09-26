import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_services/login.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit(user: User) {
    this.loginService.loginUser(user).subscribe(
      (ans) => {
        console.log(ans);
        this.isLoggedIn = true;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  

}
