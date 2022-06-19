import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatList2Component } from './candidat-list2.component';

describe('CandidatList2Component', () => {
  let component: CandidatList2Component;
  let fixture: ComponentFixture<CandidatList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatList2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
