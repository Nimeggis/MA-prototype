import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GamificationAdapterHomeComponent} from './adapter-home.component';

describe('AdapterHomeComponent', () => {
  let component: GamificationAdapterHomeComponent;
  let fixture: ComponentFixture<GamificationAdapterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamificationAdapterHomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamificationAdapterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
