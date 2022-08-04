import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseAdapterConfigComponent} from './adapter-config.component';

describe('AdapterConfigComponent', () => {
  let component: CourseAdapterConfigComponent;
  let fixture: ComponentFixture<CourseAdapterConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseAdapterConfigComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAdapterConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
