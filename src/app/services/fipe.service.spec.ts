import { TestBed } from '@angular/core/testing';

import { FipeService } from './fipe.service';

describe('FipeService', () => {
  let service: FipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
