import { Component, OnInit } from '@angular/core';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';
import { IProject } from 'src/app/interfaces/iproject';
import { ArrayType } from '@angular/compiler';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  projectList: IProject[] = [];
  projectListDummy: IProject[] = [];
  filterOn: boolean = false;
  timer: any;
  index: number = 1;

  projectSquares = document.getElementsByClassName('fadeIn');

  constructor(private projectService: ProjectsServiceService) { }

  ngOnInit(): void {
    this.projectList = this.projectService.sendList();
    this.filterOn = false;

    this.animationLoad();
    // console.log(this.projectSquares);

  }

  animationLoad() {
    if (this.projectList[0]) {
      this.projectListDummy.push(this.projectList[0]);
    }
    this.timer = setInterval(() => {
      if (this.index < this.projectList.length) {
        this.projectListDummy.push(this.projectList[this.index]);
        this.index++;
      } else {
        clearInterval(this.timer);
      }
    }, 150)
  }

  filterProjects(value: string, element: any) {

    function hashtagReset() {
      let hashtags = document.getElementsByClassName("hashtag");

      Array.from(hashtags).forEach(
        function (element) {
          // console.log(element);
          element.classList.remove("active")
        }
      );
    }

    if (element.classList.contains("active")) {
      //resets all filters
      this.ngOnInit();
      this.projectListDummy = this.projectList;
    } else {
      hashtagReset();
      // this.ngOnInit();
      this.projectListDummy = this.projectList;
      // hashtags.classList.toggle("active");
      this.projectListDummy = this.projectListDummy.filter(e => e.tags.includes(value))
    }
    // console.log(this.checkFilter());
    this.filterOn = this.checkFilter();
    // console.log(value, element.classList.contains("active"));
    element.classList.toggle("active");


  }
  checkFilter() {
    return this.projectListDummy.length !== this.projectList.length
  }

  sendIndex(value: IProject) {
    // console.log("send to service:", value)
    this.projectService.setProject(value);
  }

  yourFunc(value: any) {
    console.log(value.className)
    // document.querySelector(value).classname
    value.classList.toggle("active");

  }

  reset() {
    this.projectListDummy = this.projectList;
    this.filterOn = this.checkFilter();
  }

  returnBG(numberIncoming: number) {
    console.log(numberIncoming);
    return `url(${this.projectListDummy[numberIncoming].screenshot1})`
  }

  galleryBGStyle = "content: \"\"\n  // background-image: url('https://placekitten.com/1200/800')!important\n  background-size: cover\nposition: absolute\ntop: 0px\nright: 0px\nbottom: 0px\nleft: 0px\nopacity: 0.75";

  throwStyle(numberIncoming: number) {
    return this.galleryBGStyle;
    // `url(${this.projectListDummy[numberIncoming].screenshot1})`

    
  }

}
