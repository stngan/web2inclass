import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DongAbankComponent } from './dong-abank.component';

describe('DongAbankComponent', () => {
  let component: DongAbankComponent;
  let fixture: ComponentFixture<DongAbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DongAbankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DongAbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
