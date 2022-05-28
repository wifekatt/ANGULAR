import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteurCreateComponent } from './electeur-create.component';

describe('ElecteurCreateComponent', () => {
  let component: ElecteurCreateComponent;
  let fixture: ComponentFixture<ElecteurCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElecteurCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecteurCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
