import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/_models/article';
import { BlogService } from 'src/app/_services/blog.service';

@Component({
  selector: 'app-overview-article',
  templateUrl: './overview-article.component.html',
  styleUrls: ['./overview-article.component.css'],
  providers: [BlogService]
})
export class OverviewArticleComponent implements OnInit {

  articles: Observable<Article[]>;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.articles = this.blogService.getMyArticles();
  }

}
