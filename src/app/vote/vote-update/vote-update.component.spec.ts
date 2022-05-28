import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteUpdateComponent } from './vote-update.component';

describe('VoteUpdateComponent', () => {
  let component: VoteUpdateComponent;
  let fixture: ComponentFixture<VoteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
