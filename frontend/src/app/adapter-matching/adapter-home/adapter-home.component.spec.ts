import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingAdapterHomeComponent } from './adapter-home.component';

describe('MatchingAdapterHomeComponent', () => {
  let component: MatchingAdapterHomeComponent;
  let fixture: ComponentFixture<MatchingAdapterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingAdapterHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingAdapterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
