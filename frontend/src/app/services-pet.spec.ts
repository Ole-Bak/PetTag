import { TestBed } from '@angular/core/testing';

import { ServicesPet } from './services-pet';

describe('ServicesPet', () => {
  let service: ServicesPet;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesPet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
