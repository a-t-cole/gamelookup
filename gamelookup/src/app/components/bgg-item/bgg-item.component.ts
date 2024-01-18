import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bgg-item',
  standalone: true,
  imports: [],
  templateUrl: './bgg-item.component.html',
  styleUrl: './bgg-item.component.scss'
})
export class BggItemComponent {
  @Input() bggItem!: any
}
