import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseConfigurationComponent } from './course-configuration.component';

describe('CourseConfigurationComponent', () => {
  let component: CourseConfigurationComponent;
  let fixture: ComponentFixture<CourseConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
