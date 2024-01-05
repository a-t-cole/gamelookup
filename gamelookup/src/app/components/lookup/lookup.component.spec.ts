import { ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';

import { LookupComponent } from './lookup.component';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('LookupComponent', () => {
  let component: LookupComponent;
  let fixture: ComponentFixture<LookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LookupComponent], 
      providers:[provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('post() > ', () => {

    beforeEach(fakeAsync(() => {
      spyOn(component['lookupSvc'], 'lookupBarcode').and.returnValue(Promise.resolve([])); 
      component.post(); 
      flush(); 
    }))
    describe('when the method is called > ', () => {
      it('should call the service once with 0627843375623', () => {
        expect(component['lookupSvc'].lookupBarcode).toHaveBeenCalledOnceWith('0627843375623'); 
      }); 
    })
  })
});
