import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/interfaces/iproject';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-extensions',
  templateUrl: './extensions.component.html',
  styleUrls: ['./extensions.component.sass']
})
export class ExtensionsComponent implements OnInit {

  openExt: boolean = false;

  constructor( 
    private projectService: ProjectsServiceService, 
    private sidenav: SidenavComponent
    ) { }

  ngOnInit(): void {
    this.projectList = this.projectService.sendList();
  }

  closeExt(){
    this.sidenav.toggleExt();
  }

  projectList: IProject[] = [];

  extClick(value: string): void{
    console.log(value)
  }

  sendIndex(value: IProject) {
    // console.log("send to service:", value)
    this.projectService.setProject(value);
  }

}
