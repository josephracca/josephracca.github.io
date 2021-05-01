import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFocusModalComponent } from './project-focus-modal.component';

describe('ProjectFocusModalComponent', () => {
  let component: ProjectFocusModalComponent;
  let fixture: ComponentFixture<ProjectFocusModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectFocusModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFocusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
