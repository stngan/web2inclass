import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2B15ProductHTTPserviceComponent } from './m2-b15-product-httpservice.component';

describe('M2B15ProductHTTPserviceComponent', () => {
  let component: M2B15ProductHTTPserviceComponent;
  let fixture: ComponentFixture<M2B15ProductHTTPserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2B15ProductHTTPserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M2B15ProductHTTPserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
