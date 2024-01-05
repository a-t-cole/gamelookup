import { Component } from '@angular/core';
import { LookupService } from '../../services/lookup.service';
import { GameUpcValue } from '../../models/gameupc.models';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-lookup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lookup.component.html',
  styleUrl: './lookup.component.scss'
})
export class LookupComponent {
  public data: Observable<GameUpcValue[]> = of([]); 
  constructor(private lookupSvc: LookupService){
  }
  post(){
    this.data = this.lookupSvc.lookupBarcode('0627843375623');
  }
}
