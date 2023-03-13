import { TestBed } from '@angular/core/testing';

import { M2B16ProducthttperrorService } from './m2-b16-producthttperror.service';

describe('M2B16ProducthttperrorService', () => {
  let service: M2B16ProducthttperrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(M2B16ProducthttperrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
