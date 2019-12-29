import { TestBed } from '@angular/core/testing';

import { TypeserviceService } from './typeservice.service';

describe('TypeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeserviceService = TestBed.get(TypeserviceService);
    expect(service).toBeTruthy();
  });
});
