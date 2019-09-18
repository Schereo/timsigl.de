import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from 'src/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HttpClient]
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  form: any = {};

  ngOnInit() {
  }

  getData(){
    var params = new HttpParams();
    params.set('search', '3dprinting');
    this.http.get('http://localhost:3000').subscribe((ans) => console.log('Answer', ans));
  }

}
