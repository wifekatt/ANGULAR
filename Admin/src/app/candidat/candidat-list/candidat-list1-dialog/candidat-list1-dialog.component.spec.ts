import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatList1DialogComponent } from './candidat-list1-dialog.component';

describe('CandidatList1DialogComponent', () => {
  let component: CandidatList1DialogComponent;
  let fixture: ComponentFixture<CandidatList1DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatList1DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatList1DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
