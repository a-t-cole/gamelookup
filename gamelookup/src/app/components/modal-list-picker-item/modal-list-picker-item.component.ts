import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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

  public isChecked: boolean = true;

  onClick(){
    this.isChecked = !this.isChecked
  }
}
