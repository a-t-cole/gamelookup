import { Component, EventEmitter, HostListener, Output } from '@angular/core';
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

  public scannedText: string = ''; 
  @Output() ScannedItem: EventEmitter<string> = new EventEmitter<string>(); 
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
        this.ScannedItem.emit(this.scannedText); 
        this.scannedText = '';
        break; 
      default:
        this.scannedText += event.key; 
        break; 

    }
  }
  manualSearch(){
    if(!this.scannedText){
      this.snackbarSvc.showError('No search term to post');
      return;
    }
    this.ScannedItem.emit(this.scannedText);
    this.scannedText = '';
  }
}


