import { Injectable } from '@angular/core';
import { GameUpcValue } from '../models/gameupc.models';
import { Observable, catchError, map, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LookupService {


  constructor(private http: HttpClient) {
    this.localData$ = this.http.get<GameUpcValue[]>(this.fileUrl);
  }
  private fileUrl: string = 'assets/gameupc.json';
  private localData$:Observable<GameUpcValue[]>;
  public lookupBarcode$(barcode: string): Observable<GameUpcValue[]> {

    const filtered$ =  this.localData$.pipe(
      map(entries => {
        return entries.filter(x => x.barcode === barcode);
      }),
      catchError(error => {


        console.log('Error:', error);
        return of([]);
      })
    );
    return filtered$;
  }
  public async lookupBarcode(barcode: string): Promise<GameUpcValue[]> {

    let response = await fetch(this.fileUrl)
    let data = await response.json() as GameUpcValue[];
    return data.filter(x => x.barcode == barcode);

  }


}
