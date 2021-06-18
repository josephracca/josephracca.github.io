import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KataPostComponent } from './kata-post.component';

describe('KataPostComponent', () => {
  let component: KataPostComponent;
  let fixture: ComponentFixture<KataPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KataPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KataPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
