import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2B12ArrayproductComponent } from './m2-b12-arrayproduct.component';

describe('M2B12ArrayproductComponent', () => {
  let component: M2B12ArrayproductComponent;
  let fixture: ComponentFixture<M2B12ArrayproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2B12ArrayproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M2B12ArrayproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
