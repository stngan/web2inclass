import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2B13ProductdetailComponent } from './m2-b13-productdetail.component';

describe('M2B13ProductdetailComponent', () => {
  let component: M2B13ProductdetailComponent;
  let fixture: ComponentFixture<M2B13ProductdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2B13ProductdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M2B13ProductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
