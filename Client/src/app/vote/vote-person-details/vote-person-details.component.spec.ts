import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotePersonDetailsComponent } from './vote-person-details.component';

describe('VotePersonDetailsComponent', () => {
  let component: VotePersonDetailsComponent;
  let fixture: ComponentFixture<VotePersonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotePersonDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotePersonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
