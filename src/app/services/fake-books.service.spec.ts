import { TestBed } from '@angular/core/testing';

import { FakeBooksService } from './fake-books.service';

describe('FakeBooksService', () => {
  let service: FakeBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
