import { Component, OnInit } from '@angular/core';
import  EditorJS  from '@editorjs/editorjs';
const Header = require('@editorjs/header');
const LinkTool = require('@editorjs/link');
const RawTool = require('@editorjs/raw');
import ImageTool from '@editorjs/image';
import { Article } from 'src/app/_models/article';
import { BlogService } from 'src/app/_services/blog.service';
const Checklist = require('@editorjs/checklist');
const List = require('@editorjs/list');
const Embed = require('@editorjs/embed');
const Quote = require('@editorjs/quote');

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
  providers: [BlogService]
})
export class CreateArticleComponent implements OnInit {

  editor = new EditorJS({
    placeholder: 'Schreibe deinen Artikel hier!',
    tools: {
      header: Header,
      link: LinkTool,
      raw: RawTool,
      image: ImageTool,
      checklist: Checklist,
      list: List,
      embed: Embed,
      quote: Quote
    },
    autofocus: false
  });

  constructor(private blogService: BlogService) { }

  ngOnInit() {

  }

  onSaveArticle(formdata) {
    this.editor.save().then((text) => {
      const article: Article = {
        heading: formdata.heading,
        summary: formdata.summary,
        text: {
          blocks: text.blocks,
          time: new Date(text.time),
          version: text.version
        },
        tags: formdata.tags.split(',')
      };
      console.log(article);
      this.blogService.saveArticle(article).subscribe(
        (createdArticle)  => {
          console.log(createdArticle);
        });
    });
  }

}
