import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatList3DialogComponent } from './candidat-list3-dialog.component';

describe('CandidatList3DialogComponent', () => {
  let component: CandidatList3DialogComponent;
  let fixture: ComponentFixture<CandidatList3DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatList3DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatList3DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
