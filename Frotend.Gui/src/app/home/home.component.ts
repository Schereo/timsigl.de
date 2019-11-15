import { Component, OnInit } from '@angular/core';
import { BlogService } from '../_services/blog.service';
import { SkillCard } from '../_models/skill-card';
import { Observable } from 'rxjs';
import { Article } from '../_models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [BlogService]
})
export class HomeComponent implements OnInit {

  articles: Observable<Article[]>;

  constructor(private blogService: BlogService) { }

  form: any = {};
  skillCards: SkillCard[] = [
    new SkillCard('../../../assets/logos/angular.png', 'Angular', 'Infotext'),
    new SkillCard('../../../assets/logos/nodejs.png', 'Nodejs', 'Infotext'),
    new SkillCard('../../../assets/logos/html.png', 'HTML 5', 'Infotext'),
    new SkillCard('../../../assets/logos/mongodb.png', 'Mongo DB', 'Infotext')
  ];

  ngOnInit() {
    this.articles = this.blogService.getAllArticles();
  }


}
