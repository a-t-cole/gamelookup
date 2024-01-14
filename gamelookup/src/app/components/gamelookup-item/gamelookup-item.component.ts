import { Component, Input } from '@angular/core';
import { GameUpcValue } from '../../models/gameupc.models';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-gamelookup-item',
  standalone: true,
  imports: [ MatCardModule],
  templateUrl: './gamelookup-item.component.html',
  styleUrl: './gamelookup-item.component.scss'
})
export class GamelookupItemComponent {
  @Input()
  item: GameUpcValue | undefined; 
  
}
