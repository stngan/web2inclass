import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2B11JsonobjectComponent } from './m2-b11-jsonobject.component';

describe('M2B11JsonobjectComponent', () => {
  let component: M2B11JsonobjectComponent;
  let fixture: ComponentFixture<M2B11JsonobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2B11JsonobjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M2B11JsonobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
