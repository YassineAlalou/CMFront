import { TestBed, async, inject } from '@angular/core/testing';

import { AuthentifGuard } from './authentif.guard';

describe('AuthentifGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthentifGuard]
    });
  });

  it('should ...', inject([AuthentifGuard], (guard: AuthentifGuard) => {
    expect(guard).toBeTruthy();
  }));
});
