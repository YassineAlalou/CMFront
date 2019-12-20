import { TestBed, async, inject } from '@angular/core/testing';

import { SecretaireGuard } from './secretaire.guard';

describe('SecretaireGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecretaireGuard]
    });
  });

  it('should ...', inject([SecretaireGuard], (guard: SecretaireGuard) => {
    expect(guard).toBeTruthy();
  }));
});
