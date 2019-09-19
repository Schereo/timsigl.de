import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  form: any = {};

  ngOnInit() {
  }

  async loginUser() {
    await this.loginService.loginUser(new User(form.name, form.password))
  }

}
