import { CommonModule } from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal-list-picker-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-list-picker-item.component.html',
  styleUrl: './modal-list-picker-item.component.scss'
})
export class ModalListPickerItemComponent {
  @Input()
  primaryText!: string;
  @Input()
  secondaryText: string = '';
  @Input() isChecked: boolean = false;
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  onClick(){
    this.isChecked = !this.isChecked
    this.selected.emit(this.isChecked);
  }
}
