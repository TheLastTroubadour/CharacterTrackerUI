import { TestBed } from '@angular/core/testing';

import { Epic15Service } from './epic1-5.service';

describe('Epic15Service', () => {
  let service: Epic15Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Epic15Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
