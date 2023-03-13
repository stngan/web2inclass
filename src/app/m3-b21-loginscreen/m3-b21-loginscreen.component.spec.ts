import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3B21LoginscreenComponent } from './m3-b21-loginscreen.component';

describe('M3B21LoginscreenComponent', () => {
  let component: M3B21LoginscreenComponent;
  let fixture: ComponentFixture<M3B21LoginscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3B21LoginscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M3B21LoginscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
