import { Component, OnInit } from '@angular/core';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';
import { IProject } from 'src/app/interfaces/iproject';


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

  filterProjects(value: string) {
    this.ngOnInit();
    this.projectList = this.projectList.filter(e => e.tags.includes(value))
    this.filterOn = !this.filterOn;
  }

  sendIndex(value: IProject) {
    // console.log("send to service:", value)
    this.projectService.setProject(value);
  }

}
