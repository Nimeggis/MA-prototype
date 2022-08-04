import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KnowledgeAdapterHomeComponent} from './adapter-home.component';

describe('AdapterHomeComponent', () => {
  let component: KnowledgeAdapterHomeComponent;
  let fixture: ComponentFixture<KnowledgeAdapterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KnowledgeAdapterHomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeAdapterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
