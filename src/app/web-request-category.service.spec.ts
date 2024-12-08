import { TestBed } from '@angular/core/testing';

import { WebRequestCategoryService } from './web-request-category.service';

describe('WebRequestCategoryService', () => {
  let service: WebRequestCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebRequestCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
