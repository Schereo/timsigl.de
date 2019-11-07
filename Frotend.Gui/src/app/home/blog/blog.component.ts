import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/_models/article';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() {
    console.log(this.article);
  }

}
