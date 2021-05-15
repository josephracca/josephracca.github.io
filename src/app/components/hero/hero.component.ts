import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {

  action: string = "";

  headshot: string = "./../../images/headshot.png"


  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.changeActionWord();
  }

  doSomethingCool(elementId: string): void {
    // console.log("go down");
    this.viewportScroller.scrollToAnchor(elementId);
  }

  changeActionWord() {

    setInterval(() => {
      //replaced function() by ()=>
      // this.myDate = new Date();
      //now iterate through array
      let actionWordsList = ["click", "tap", "scroll"]
      // console.log("test");

      this.action = actionWordsList[Math.floor(Math.random() * actionWordsList.length)]
      // console.log(this.action);
      // just testing if it is working
      // return "string";
    }, 1700);

    
  }



  

}
