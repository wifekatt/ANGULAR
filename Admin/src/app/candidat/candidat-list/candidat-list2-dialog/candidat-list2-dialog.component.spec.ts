import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatList2DialogComponent } from './candidat-list2-dialog.component';

describe('CandidatList2DialogComponent', () => {
  let component: CandidatList2DialogComponent;
  let fixture: ComponentFixture<CandidatList2DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatList2DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatList2DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
