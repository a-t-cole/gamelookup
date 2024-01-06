import { EventEmitter, Injectable } from '@angular/core';
import { SnackbarEvent } from '../models/snackbar.models';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  public SnackbarEventBus: EventEmitter<SnackbarEvent>; 
  constructor() {
    this.SnackbarEventBus = new EventEmitter<SnackbarEvent>(); 
   }
   public showBar(message: string){
    if(!message){
      return; 
    }
    this.SnackbarEventBus.emit(new SnackbarEvent(message)); 
   }
}
