import { TestBed } from '@angular/core/testing';

import { WebRequestProductService } from './web-request-product.service';

describe('WebRequestService', () => {
  let service: WebRequestProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebRequestProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
