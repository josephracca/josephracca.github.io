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
  filterOn: boolean = false;

  constructor(private projectService: ProjectsServiceService) { }

  ngOnInit(): void {
    this.projectList = this.projectService.sendList();
    this.filterOn = false;

  }

  filterProjects(value: string, element: any) {

    let hashtags = document.getElementsByClassName("hashtag");

    if (element.classList.contains("active")) {
      //resets all filters
      this.ngOnInit();
    } else {
      Array.from(hashtags).forEach(
        function (element) {
          console.log(element);
          element.classList.remove("active")
        }
      );
      this.ngOnInit();
      // hashtags.classList.toggle("active");
      this.projectList = this.projectList.filter(e => e.tags.includes(value))
      this.filterOn = !this.filterOn;
    }
    console.log(value, element.classList.contains("active"));
    element.classList.toggle("active");

    
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

}
