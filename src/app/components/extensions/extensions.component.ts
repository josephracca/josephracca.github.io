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

  constructor( private projectService: ProjectsServiceService, private sidenav: SidenavComponent) { }

  ngOnInit(): void {
    this.projectList = this.projectService.sendList();
    this.openExt = this.projectService.extensionsClosed;
  }

  closeExt(){
    // this.projectService.toggleExtensions();
    // this.openExt = this.projectService.extensionsClosed;
    this.sidenav.comingSoon();
  }

  projectList: IProject[] = [];

  // get 



}
