import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListPickerItemComponent } from './modal-list-picker-item.component';
import {MatDialogRef} from "@angular/material/dialog";

describe('ModalListPickerItemComponent', () => {
  let component: ModalListPickerItemComponent;
  let fixture: ComponentFixture<ModalListPickerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalListPickerItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalListPickerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
