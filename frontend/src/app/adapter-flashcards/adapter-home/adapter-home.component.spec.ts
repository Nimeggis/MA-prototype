import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FlashcardsAdapterHomeComponent} from './adapter-home.component';

describe('AdapterHomeComponent', () => {
  let component: FlashcardsAdapterHomeComponent;
  let fixture: ComponentFixture<FlashcardsAdapterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashcardsAdapterHomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardsAdapterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
