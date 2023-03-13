import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2B16ProductHttpserviceerrorComponent } from './m2-b16-product-httpserviceerror.component';

describe('M2B16ProductHttpserviceerrorComponent', () => {
  let component: M2B16ProductHttpserviceerrorComponent;
  let fixture: ComponentFixture<M2B16ProductHttpserviceerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2B16ProductHttpserviceerrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M2B16ProductHttpserviceerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
