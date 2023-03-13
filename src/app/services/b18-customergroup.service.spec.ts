import { TestBed } from '@angular/core/testing';

import { B18CustomergroupService } from './b18-customergroup.service';

describe('B18CustomergroupService', () => {
  let service: B18CustomergroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(B18CustomergroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
