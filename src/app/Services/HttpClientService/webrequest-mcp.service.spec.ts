import { TestBed } from '@angular/core/testing';

import { WebrequestMcpService } from './webrequest-mcp.service';

describe('WebrequestMcpService', () => {
  let service: WebrequestMcpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebrequestMcpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
