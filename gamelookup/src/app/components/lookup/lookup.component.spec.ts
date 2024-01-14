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
      providers:[provideHttpClient(), provideHttpClientTesting(), {provide: MatDialogRef, useValue: {open(){}}}]
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
    describe('when the method is called > ', () => {
      describe('and there is no result from the API >', () => {
        beforeEach(fakeAsync(() => {
          spyOn(component['lookupSvc'], 'lookupBarcode').and.returnValue(Promise.resolve([]));
          spyOn(component['snackbarSvc'], 'showBar').and.stub();
          component.post('0627843375623');
          flush();
        }))
        it('should call the service once with 0627843375623', () => {
          expect(component['lookupSvc'].lookupBarcode).toHaveBeenCalledOnceWith('0627843375623');
        });
        it('should show the snackbar', () => {
          expect(component['snackbarSvc'].showBar).toHaveBeenCalledOnceWith('Nothing found for barcode: 0627843375623')
        })
      });
      describe('and the API returns a single value', () => {
        let response = [{name: 'Bob'} as GameUpcValue];
        beforeEach(fakeAsync(() => {
          spyOn(component['lookupSvc'], 'lookupBarcode').and.returnValue(Promise.resolve(response));
          spyOn(component['snackbarSvc'], 'showBar').and.stub();
          component.post('0627843375623');
          flush();
        }))
        it('should not call the snackbar service', () => {
          expect(component['snackbarSvc'].showBar).not.toHaveBeenCalled();
        });
        it('should set the selected property', () =>{
          expect(component.selected).toBe(response[0]);
        });
      });
      describe('and the API returns a multiple results', () => {
        let multiResponse = [{name: 'Bob'} as GameUpcValue, {name: 'Dave'} as GameUpcValue];
        beforeEach(fakeAsync(() => {
          spyOn(component['lookupSvc'], 'lookupBarcode').and.returnValue(Promise.resolve(multiResponse));
          spyOn(component['snackbarSvc'], 'showBar').and.stub();
          spyOn(component, 'openDialog').and.stub();

          component.post('0627843375623');
          flush();
        }))
        it('should not call the snackbar service', () => {
          expect(component['snackbarSvc'].showBar).not.toHaveBeenCalled();
        });
        it('should try and open the dialog', () =>{
          expect(component['openDialog']).toHaveBeenCalled();
        });

      });
    })
  })
});
