import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseAdapterHomeComponent} from './adapter-home.component';

describe('AdapterHomeComponent', () => {
  let component: CourseAdapterHomeComponent;
  let fixture: ComponentFixture<CourseAdapterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseAdapterHomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAdapterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
