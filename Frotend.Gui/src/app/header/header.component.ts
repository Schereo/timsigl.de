import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_services/login.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  errorMessage: string;
  isLoading = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onLogin(user: User) {
    this.isLoading = true;
    this.loginService.loginUser(user).subscribe(
      ans => {
        console.log(ans);
        this.isLoading = false;
        this.errorMessage = "Erfolgreich angemeldet!"
      },
      error => {
        console.log(error);
        this.isLoading = false;
      } 
    );
  }

}
