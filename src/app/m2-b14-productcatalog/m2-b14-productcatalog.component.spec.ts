import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2B14ProductcatalogComponent } from './m2-b14-productcatalog.component';

describe('M2B14ProductcatalogComponent', () => {
  let component: M2B14ProductcatalogComponent;
  let fixture: ComponentFixture<M2B14ProductcatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2B14ProductcatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M2B14ProductcatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
