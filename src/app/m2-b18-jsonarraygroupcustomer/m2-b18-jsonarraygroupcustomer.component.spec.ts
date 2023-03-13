import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2B18JsonarraygroupcustomerComponent } from './m2-b18-jsonarraygroupcustomer.component';

describe('M2B18JsonarraygroupcustomerComponent', () => {
  let component: M2B18JsonarraygroupcustomerComponent;
  let fixture: ComponentFixture<M2B18JsonarraygroupcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2B18JsonarraygroupcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M2B18JsonarraygroupcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
