import { ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';

import { LookupComponent } from './lookup.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import {MatDialogRef} from "@angular/material/dialog";
import {GameUpcValue} from "../../models/gameupc.models";

describe('LookupComponent', () => {
  let component: LookupComponent;
  let fixture: ComponentFixture<LookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LookupComponent],
      providers:[provideHttpClient(), provideHttpClientTesting(), {provide: MatDialogRef, useValue: {}}]
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
    let response: GameUpcValue[] = []
    beforeEach(fakeAsync(() => {
      spyOn(component['lookupSvc'], 'lookupBarcode').and.returnValue(Promise.resolve(response));
      spyOn(component['snackbarSvc'], 'showBar').and.stub();
      component.post('0627843375623');
      flush();
    }))
    describe('when the method is called > ', () => {
      describe('and there is no result from the API >', () =>{
        it('should call the service once with 0627843375623', () => {
          expect(component['lookupSvc'].lookupBarcode).toHaveBeenCalledOnceWith('0627843375623');
        });
        it('should show the snackbar', () => {
          expect(component['snackbarSvc'].showBar).toHaveBeenCalledOnceWith('Nothing found for barcode: 0627843375623')
        })
      })

      it('')
    })
  })
});
