import { Component, OnInit } from '@angular/core';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {

  openExt: boolean = false;

  constructor(private projectService: ProjectsServiceService) { }

  ngOnInit(): void {
    // this.openExt = this.projectService.toggleExtensions();
  }

  comingSoon() {
    // alert('Extensions on their way...check back soon!')
    this.openExt = !this.openExt;
  }


  closeExt() {
    this.openExt = this.projectService.toggleExtensions();
    console.log(this.openExt);

  }

}
