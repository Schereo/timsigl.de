import { Component, OnInit, Input } from '@angular/core';
import { SkillCard } from 'src/app/_models/skill-card';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @Input() skillCard: SkillCard;

  constructor() { }

  ngOnInit() {
  }

}
