import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KnowledgeAdapterConfigComponent} from './adapter-config.component';

describe('AdapterConfigComponent', () => {
  let component: KnowledgeAdapterConfigComponent;
  let fixture: ComponentFixture<KnowledgeAdapterConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KnowledgeAdapterConfigComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeAdapterConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
