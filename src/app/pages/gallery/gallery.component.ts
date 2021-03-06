import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {
  projects: string[] = ["EightAnd", "Tokay Press", "HFP", "Flash", "RPSLS", "Top10", "DoND", "Calculator", "R&OM", "UpVote", "A41", "Weather.Gogh", "random", "le maison", "puppy", "DOM", "___", "..."]

  constructor() { }

  ngOnInit(): void {
  }

}
