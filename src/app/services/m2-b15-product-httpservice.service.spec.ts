import { TestBed } from '@angular/core/testing';

import { M2B15ProductHttpserviceService } from './m2-b15-product-httpservice.service';

describe('M2B15ProductHttpserviceService', () => {
  let service: M2B15ProductHttpserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(M2B15ProductHttpserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
