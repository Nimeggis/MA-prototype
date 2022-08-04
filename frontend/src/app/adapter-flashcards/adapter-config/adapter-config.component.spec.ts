import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FlashcardsAdapterConfigComponent} from './adapter-config.component';

describe('AdapterConfigComponent', () => {
  let component: FlashcardsAdapterConfigComponent;
  let fixture: ComponentFixture<FlashcardsAdapterConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashcardsAdapterConfigComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardsAdapterConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
