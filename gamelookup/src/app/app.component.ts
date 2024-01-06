import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SnackbarService } from './services/snackbar.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarEvent } from './models/snackbar.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  providers:[]
})
export class AppComponent implements OnInit {
  title = 'gamelookup';
  constructor(private snackbarSvc: SnackbarService, private _snackBar: MatSnackBar){

  }
  ngOnInit(): void {
    this.snackbarSvc.SnackbarEventBus.subscribe((x:SnackbarEvent) => {
      console.log('snackbar request'); 
      this._snackBar.open(x.message, 'OK', {
        duration: x.duration, verticalPosition: 'bottom', horizontalPosition: 'center' 
      })
    })
  }
}
