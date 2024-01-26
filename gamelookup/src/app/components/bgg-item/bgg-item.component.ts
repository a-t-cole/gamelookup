import { Component, Input } from '@angular/core';
import { BggSearchItemDto } from 'boardgamegeekclient/dist/esm/dto/concrete/subdto';

@Component({
  selector: 'app-bgg-item',
  standalone: true,
  imports: [],
  templateUrl: './bgg-item.component.html',
  styleUrl: './bgg-item.component.scss'
})
export class BggItemComponent {
  @Input() item!: BggSearchItemDto
}
