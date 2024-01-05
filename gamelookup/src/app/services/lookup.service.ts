import { Injectable } from '@angular/core';
import { GameUpcValue } from '../models/gameupc.models';
import { Observable, map, of, pipe, shareReplay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private http: HttpClient) { 
    this.localData$ = this.http.get<GameUpcValue[]>('assets/gameupc.json');
  }
  private localData$:Observable<GameUpcValue[]>;  
  public lookupBarcode(barcode: string): Observable<GameUpcValue[]> {
    
    const filtered$ =  this.localData$.pipe(
      map(entries => {
        console.log(entries.length)
        return entries.filter(x => x.barcode === barcode);
      })
    ); 
    return filtered$; 
  }

}
