import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.sass']
})
export class SkillsetComponent implements OnInit {

  code: string[] = ['1', '1', '1', '1', '1', '1', '1',]

  constructor() { }

  ngOnInit(): void {
  }

}
