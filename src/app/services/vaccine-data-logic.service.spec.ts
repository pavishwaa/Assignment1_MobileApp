import { TestBed } from '@angular/core/testing';

import { VaccineDataLogicService } from './vaccine-data-logic.service';

describe('VaccineDataLogicService', () => {
  let service: VaccineDataLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccineDataLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
