import { TestBed } from '@angular/core/testing';

import { AngOrganismService } from './ang-organism.service';

describe('AngOrganismService', () => {
  let service: AngOrganismService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngOrganismService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
