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
  public selected: GameUpcValue | undefined;
  constructor(private lookupSvc: LookupService, private snackbarSvc: SnackbarService, public dialog: MatDialog){
  }
  async post(barcode: string){
    const d = await this.lookupSvc.lookupBarcode(barcode);
    if(d.length == 0){
      this.snackbarSvc.showBar(`Nothing found for barcode: ${barcode}`);
    }else if(d.length == 1){
      this.selected = d[0];
    }else{
      this.openDialog(d);
    }
  }
  openDialog(items: GameUpcValue[]): void{
    const dialogRef = this.dialog.open(ModalListPickerComponent, {
      width: '90%',
      data: {Items: items, DisplayKey: 'name'} as ModalListPickerData<GameUpcValue>
    });

    dialogRef.afterClosed().subscribe(result => {
      this.snackbarSvc.showBar(`Selected ${result.Selected.name ?? 'none'}`)
      this.selected = result.Selected;
    });
  }
}
