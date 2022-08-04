import {ComponentFixture, TestBed} from '@angular/core/testing';

import {QuizAdapterConfigComponent} from './adapter-config.component';

describe('AdapterConfigComponent', () => {
  let component: QuizAdapterConfigComponent;
  let fixture: ComponentFixture<QuizAdapterConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizAdapterConfigComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAdapterConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
