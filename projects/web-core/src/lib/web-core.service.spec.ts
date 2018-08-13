import { TestBed, inject } from '@angular/core/testing';

import { WebCoreService } from './web-core.service';

describe('WebCoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebCoreService]
    });
  });

  it('should be created', inject([WebCoreService], (service: WebCoreService) => {
    expect(service).toBeTruthy();
  }));
});
