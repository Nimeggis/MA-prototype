import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdapterOverviewComponent } from './adapter-overview.component';

describe('AdapterOverviewComponent', () => {
  let component: AdapterOverviewComponent;
  let fixture: ComponentFixture<AdapterOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdapterOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdapterOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
