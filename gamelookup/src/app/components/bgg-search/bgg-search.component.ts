import { Component } from '@angular/core';
import { BggService } from '../../services/bgg.service';
import { SnackbarService } from '../../services/snackbar.service';
import { ScanhandlerComponent } from '../scanhandler/scanhandler.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalListPickerComponent } from '../modal-list-picker/modal-list-picker.component';
import { BggSearchDto } from 'boardgamegeekclient/dist/esm/dto';
import { ModalListPickerData } from '../../models/dialog.models';

@Component({
  selector: 'app-bgg-search',
  standalone: true,
  imports: [ScanhandlerComponent, MatDialogModule],
  templateUrl: './bgg-search.component.html',
  styleUrl: './bgg-search.component.scss'
})
export class BggSearchComponent {
  constructor(public bggSvc: BggService, public snackBarSvc: SnackbarService, public dialog: MatDialog){

  }
  public selected: any | undefined; 
  async searchBgg(term: any){
    term = term.trim(); 
    if(!term){
      return; 
    }
     let result = await this.bggSvc.searchItemsByTerm(term); 
     if(!result.length){
       this.snackBarSvc.showBar(`Nothing found on BGG for ${term}`); 

     }else if(result.length == 1){
      this.selected = result[0]; 
    }else{
      this.openDialog(result); 
    }
  }
  openDialog(items: BggSearchDto[]): void{
    const dialogRef = this.dialog.open(ModalListPickerComponent, {
      width: '90%',
      data: {Items: items, DisplayKey: 'name'} as ModalListPickerData<BggSearchDto>
    });

    dialogRef.afterClosed().subscribe(result => {
      this.snackBarSvc.showBar(`Selected ${result.Selected.name ?? 'none'}`)
      this.selected = result.Selected;
    });
  }
}
