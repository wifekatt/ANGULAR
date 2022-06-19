import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatList1Component } from './candidat-list1.component';

describe('CandidatList1Component', () => {
  let component: CandidatList1Component;
  let fixture: ComponentFixture<CandidatList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatList1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
