import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatCreateComponent } from './candidat-create.component';

describe('CandidatCreateComponent', () => {
  let component: CandidatCreateComponent;
  let fixture: ComponentFixture<CandidatCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
