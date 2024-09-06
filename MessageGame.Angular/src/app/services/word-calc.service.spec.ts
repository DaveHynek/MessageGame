import { TestBed } from '@angular/core/testing';

import { WordCalcService } from './word-calc.service';

describe('WordCalcService', () => {
  let service: WordCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
