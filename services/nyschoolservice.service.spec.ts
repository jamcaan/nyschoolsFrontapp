import { TestBed } from '@angular/core/testing';

import { NyschoolserviceService } from './nyschoolservice.service';

describe('NyschoolserviceService', () => {
  let service: NyschoolserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NyschoolserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
