import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {

  openExt: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleExt() {
    this.openExt = !this.openExt;
  }

}
