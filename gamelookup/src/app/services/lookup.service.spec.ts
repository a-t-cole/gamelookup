import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LookupService } from './lookup.service';

describe('LookupService', () => {
  let service: LookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('lookupBarcode > ', () => {
    describe('when the barcode is found > ', () => {
      it('should return the data', (done: DoneFn) => {
        const response = service.lookupBarcode('0655132003049'); 
        response.subscribe(x => {
          expect(x.length).toBe(1); 
          done()
        }); 
      })
    })
  })
});
