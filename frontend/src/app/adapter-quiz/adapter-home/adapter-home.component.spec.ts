import {ComponentFixture, TestBed} from '@angular/core/testing';

import {QuizAdapterHomeComponent} from './adapter-home.component';

describe('AdapterHomeComponent', () => {
  let component: QuizAdapterHomeComponent;
  let fixture: ComponentFixture<QuizAdapterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizAdapterHomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAdapterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
