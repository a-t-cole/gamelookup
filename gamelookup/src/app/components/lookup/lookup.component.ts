import { Component } from '@angular/core';
import { LookupService } from '../../services/lookup.service';
import { GameUpcValue } from '../../models/gameupc.models';
import { CommonModule } from '@angular/common';
import { SnackbarService } from '../../services/snackbar.service';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-lookup',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './lookup.component.html',
  styleUrl: './lookup.component.scss'
})
export class LookupComponent {
  public data: GameUpcValue[] = []; 
  constructor(private lookupSvc: LookupService, private snackbarSvc: SnackbarService){
  }
  async post(){
    this.data = await this.lookupSvc.lookupBarcode('0627843375623'); 
    this.snackbarSvc.showBar(`Found ${this.data.length} entries`); 
  }
}
