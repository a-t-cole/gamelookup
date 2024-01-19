import { Component } from '@angular/core';
import { BggService } from '../../services/bgg.service';
import { SnackbarService } from '../../services/snackbar.service';
import { ScanhandlerComponent } from '../scanhandler/scanhandler.component';

@Component({
  selector: 'app-bgg-search',
  standalone: true,
  imports: [ScanhandlerComponent],
  templateUrl: './bgg-search.component.html',
  styleUrl: './bgg-search.component.scss'
})
export class BggSearchComponent {
  constructor(public bggSvc: BggService, public snackBarSvc: SnackbarService){

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

    }
  }
}
