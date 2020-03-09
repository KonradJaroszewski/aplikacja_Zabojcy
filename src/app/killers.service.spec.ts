import { TestBed } from '@angular/core/testing';

import { KillersService } from './killers.service';

describe('KillersService', () => {
  let service: KillersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KillersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
