import { Injectable } from '@angular/core';
import { GameUpcValue } from '../models/gameupc.models';
import { Observable, of, pipe, shareReplay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private http: HttpClient) { 
    this.localData$ = this.http.get<GameUpcValue[]>('assets/gameupc.json').pipe(shareReplay(1));
  }
  private localData$:Observable<GameUpcValue[]>;  
  public lookupBarcode(barcode: string): Observable<GameUpcValue[]> {
    
    return this.localData$.pipe(
      tap(x => {
        console.log(`Found ${x.length} `); 
        return x.find(y => y.barcode === barcode); 
      })
    )
  }

}
