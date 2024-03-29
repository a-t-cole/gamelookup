import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { ModalListPickerData } from '../../models/dialog.models';
import { SnackbarService } from '../../services/snackbar.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { ModalListPickerItemComponent } from '../modal-list-picker-item/modal-list-picker-item.component';

@Component({
  selector: 'app-modal-list-picker',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatRippleModule, ModalListPickerItemComponent, MatDialogModule],
  templateUrl: './modal-list-picker.component.html',
  styleUrl: './modal-list-picker.component.scss'
})
export class ModalListPickerComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<ModalListPickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalListPickerData<any>,
    private snackbarSvc: SnackbarService) {

    }
  ngOnInit(): void {
    this.validate();
  }
  validate(): void{

    let valid = true;
    if(!this.data.Items.length){
      this.snackbarSvc.showBar("No items found for picker")
      valid = false;
    }

    if(!valid){
      this.dialogRef.close(null);
    }
  }
  itemClicked(item: any){
    this.data.Selected = item;
  }
}
