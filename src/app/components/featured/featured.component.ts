import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.sass']
})
export class FeaturedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  comingSoon() {
    alert("Good things come to those who wait, so check back soon!")
  }

}
