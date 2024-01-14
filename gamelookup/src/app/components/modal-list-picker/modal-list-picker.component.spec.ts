import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListPickerComponent } from './modal-list-picker.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {ModalListPickerData} from "../../models/dialog.models";

describe('ModalListPickerComponent', () => {
  let component: ModalListPickerComponent;
  let fixture: ComponentFixture<ModalListPickerComponent>;
  let dialogData: ModalListPickerData<any> = {Items: [], Selected: undefined, DisplayKey: 'Name'};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalListPickerComponent, MatDialogModule],
      providers:[{provide: MatDialogRef, useValue: {close(){}}}, {provide: MAT_DIALOG_DATA, useValue: dialogData}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalListPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
