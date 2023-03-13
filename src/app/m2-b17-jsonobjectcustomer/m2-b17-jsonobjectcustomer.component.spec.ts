import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2B17JsonobjectcustomerComponent } from './m2-b17-jsonobjectcustomer.component';

describe('M2B17JsonobjectcustomerComponent', () => {
  let component: M2B17JsonobjectcustomerComponent;
  let fixture: ComponentFixture<M2B17JsonobjectcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2B17JsonobjectcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M2B17JsonobjectcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
