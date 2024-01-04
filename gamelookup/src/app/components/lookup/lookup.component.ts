import { Component } from '@angular/core';
import { LookupService } from '../../services/lookup.service';
import { GameUpcValue } from '../../models/gameupc.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lookup',
  standalone: true,
  imports: [],
  templateUrl: './lookup.component.html',
  styleUrl: './lookup.component.scss'
})
export class LookupComponent {
  public data: GameUpcValue[] = []; 
  constructor(private lookupSvc: LookupService){
  }
  post(){
    this.lookupSvc.lookupBarcode('0627843375623').subscribe(x => {
      this.data = x; 
    })
  }
}
