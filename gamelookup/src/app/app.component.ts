import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LookupService } from './services/lookup.service';
import { LookupComponent } from './components/lookup/lookup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  providers:[]
})
export class AppComponent {
  title = 'gamelookup';
}
