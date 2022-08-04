import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VideoAdapterConfigComponent} from './adapter-config.component';

describe('AdapterConfigComponent', () => {
  let component: VideoAdapterConfigComponent;
  let fixture: ComponentFixture<VideoAdapterConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoAdapterConfigComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAdapterConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
