import { TestBed } from '@angular/core/testing';

import { MCPServiceService } from './mcp-service.service';

describe('MCPServiceService', () => {
  let service: MCPServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MCPServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
