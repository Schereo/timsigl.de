import { Component, OnInit } from '@angular/core';
import  EditorJS  from '@editorjs/editorjs';
const Header = require('@editorjs/header');
const LinkTool = require('@editorjs/link');
const RawTool = require('@editorjs/raw');
import ImageTool from '@editorjs/image';
const Checklist = require('@editorjs/checklist');
const List = require('@editorjs/list');
const Embed = require('@editorjs/embed');
const Quote = require('@editorjs/quote');

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  editor = new EditorJS({
    placeholder: 'Schreibe dein Artikel hier!',
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
    autofocus: true
  });

  constructor() { }

  ngOnInit() {
    
  }

  onArticleSave(){
    this.editor.save().then((outputData) => {
      console.log(outputData)
    })
  }

}
