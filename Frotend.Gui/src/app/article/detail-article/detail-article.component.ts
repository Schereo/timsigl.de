import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/_services/blog.service';
import { Article } from 'src/app/_models/article';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css'],
  providers: [BlogService]
})
export class DetailArticleComponent implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute,
    private blogService: BlogService) { }

  ngOnInit() {
    const articleUrl = this.route.snapshot.paramMap.get('url');
    this.blogService.getArticleByUrl(articleUrl).subscribe(article => {
      this.article = article;
      console.log(article);
    });
  }

}
