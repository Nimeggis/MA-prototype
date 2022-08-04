import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GamificationAdapterConfigComponent} from './adapter-config.component';

describe('AdapterConfigComponent', () => {
  let component: GamificationAdapterConfigComponent;
  let fixture: ComponentFixture<GamificationAdapterConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamificationAdapterConfigComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamificationAdapterConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
