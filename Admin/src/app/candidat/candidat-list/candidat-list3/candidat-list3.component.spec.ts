import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatList3Component } from './candidat-list3.component';

describe('CandidatList3Component', () => {
  let component: CandidatList3Component;
  let fixture: ComponentFixture<CandidatList3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatList3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
