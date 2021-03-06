import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {

  headshot: string = "./../../images/headshot.png"


  constructor() { }

  ngOnInit(): void {
  }

}
