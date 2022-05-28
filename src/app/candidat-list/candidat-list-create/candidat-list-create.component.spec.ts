import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatListCreateComponent } from './candidat-list-create.component';

describe('CandidatListCreateComponent', () => {
  let component: CandidatListCreateComponent;
  let fixture: ComponentFixture<CandidatListCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatListCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatListCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
