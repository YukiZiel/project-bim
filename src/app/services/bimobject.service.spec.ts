import { TestBed } from '@angular/core/testing';

import { BimobjectService } from './bimobject.service';

describe('BimobjectService', () => {
  let service: BimobjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BimobjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
