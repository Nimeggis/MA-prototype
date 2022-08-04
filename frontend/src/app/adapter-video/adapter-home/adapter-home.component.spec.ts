import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VideoAdapterHomeComponent} from './adapter-home.component';

describe('AdapterHomeComponent', () => {
  let component: VideoAdapterHomeComponent;
  let fixture: ComponentFixture<VideoAdapterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoAdapterHomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAdapterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
