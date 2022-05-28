import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatListUpdateComponent } from './candidat-list-update.component';

describe('CandidatListUpdateComponent', () => {
  let component: CandidatListUpdateComponent;
  let fixture: ComponentFixture<CandidatListUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatListUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatListUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
