import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingAdapterConfigComponent } from './adapter-config.component';

describe('MatchingAdapterConfigComponent', () => {
  let component: MatchingAdapterConfigComponent;
  let fixture: ComponentFixture<MatchingAdapterConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingAdapterConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingAdapterConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
