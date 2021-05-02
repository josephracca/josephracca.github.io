import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IProject } from 'src/app/interfaces/iproject';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';

@Component({
  selector: 'app-project-focus-modal',
  templateUrl: './project-focus-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./project-focus-modal.component.sass',
],
  
})
export class ProjectFocusModalComponent implements OnInit {

  closeResult: string = "";
  currentProject: any;

  constructor(private modalService: NgbModal, private pService: ProjectsServiceService) {}

  openXl(content: any) {
    this.currentProject = this.pService.returnProject();
    this.modalService.open(content, { size: 'xl' , centered: true});
    // console.log(this.pService.returnProject());
  }

  ngOnInit(): void {
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  // sendIndex(): void {
  //   console.log("void")
  // }

}
