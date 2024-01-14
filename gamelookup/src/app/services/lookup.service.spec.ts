import { TestBed, fakeAsync, flush } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LookupService } from './lookup.service';
import { HttpClient } from '@angular/common/http';

describe('LookupService', () => {
  let service: LookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    TestBed.inject(HttpClient); 
    TestBed.inject(HttpTestingController); 
    service = TestBed.inject(LookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
