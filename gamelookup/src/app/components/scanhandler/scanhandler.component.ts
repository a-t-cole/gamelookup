import { Component, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DefaultTitleStrategy } from '@angular/router';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-scanhandler',
  standalone: true,
  imports: [FormsModule, MatButtonModule],
  templateUrl: './scanhandler.component.html',
  styleUrl: './scanhandler.component.scss'
})
export class ScanhandlerComponent {
  constructor(public snackbarSvc: SnackbarService){

  }
  public isFocussed: boolean = false; 
  public scannedText: string = ''; 
  @Output() ScannedItem: EventEmitter<string> = new EventEmitter<string>(); 
  onFocus() {
    this.isFocussed = true;
  }
  onBlur() {
    this.isFocussed = false;
  }
  @HostListener('keydown', ['$event'])
  
  onKeyDown(event: KeyboardEvent) {
    switch(event.key){
      case "Backspace":
      case "Clear":
        if(this.scannedText.length){
          this.scannedText = this.scannedText.substring(this.scannedText.length-1, 1);
        }
        break; 
      case "Enter":
        if(!this.scannedText){
          this.scannedText = (<HTMLInputElement>document.getElementById('scanBox')).value; 
        }
        this.ScannedItem.emit(this.scannedText); 
        this.scannedText = '';
        break; 
      default:
        if(this.isFocussed){
          return; 
         }else{
           this.scannedText += event.key; 
         }
        break; 

    }
  }
  manualSearch(){
    if(!this.scannedText){
      const textBoxVal = (<HTMLInputElement>document.getElementById('scanBox')).value;
      if(!textBoxVal){
        this.snackbarSvc.showError('No search term to post');
        return;
      }else{
        this.scannedText = textBoxVal; 
      }
    }
    this.ScannedItem.emit(this.scannedText);
    this.scannedText = '';
  }
}


