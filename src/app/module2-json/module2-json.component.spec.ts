import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2JsonComponent } from './module2-json.component';

describe('Module2JsonComponent', () => {
  let component: Module2JsonComponent;
  let fixture: ComponentFixture<Module2JsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Module2JsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module2JsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
