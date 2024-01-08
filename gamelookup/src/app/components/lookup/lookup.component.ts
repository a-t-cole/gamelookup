import { Component } from '@angular/core';
import { LookupService } from '../../services/lookup.service';
import { GameUpcValue } from '../../models/gameupc.models';
import { CommonModule } from '@angular/common';
import { SnackbarService } from '../../services/snackbar.service';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { GamelookupItemComponent } from '../gamelookup-item/gamelookup-item.component';
import {MatDialog} from '@angular/material/dialog';
import { ModalListPickerComponent } from '../modal-list-picker/modal-list-picker.component';
import { ModalListPickerData } from '../../models/dialog.models';

@Component({
  selector: 'app-lookup',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, GamelookupItemComponent,ModalListPickerComponent],
  templateUrl: './lookup.component.html',
  styleUrl: './lookup.component.scss'
})
export class LookupComponent {
  public data: GameUpcValue[] = []; 
  constructor(private lookupSvc: LookupService, private snackbarSvc: SnackbarService, public dialog: MatDialog){
  }
  async post(){
    this.data = await this.lookupSvc.lookupBarcode('0627843375623'); 
    this.snackbarSvc.showBar(`Found ${this.data.length} entries`); 
    this.openDialog(this.data);
  }
  openDialog(items: GameUpcValue[]): void{
    const dialogRef = this.dialog.open(ModalListPickerComponent, {
      width: '90%',
      height: '90%',
      data: {Items: items, DisplayKey: 'name'} as ModalListPickerData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
