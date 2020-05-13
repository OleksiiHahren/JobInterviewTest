import { TestBed } from '@angular/core/testing';

import { FakeBackendInterceptorService } from './fake-backend-interceptor.service';

describe('FakeBackendInterceptorService', () => {
  let service: FakeBackendInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeBackendInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
