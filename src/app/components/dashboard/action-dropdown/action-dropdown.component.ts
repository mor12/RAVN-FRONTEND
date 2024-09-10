import { Component, EventEmitter, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-action-dropdown',
  standalone: true,
  imports: [MatMenuModule, ButtonComponent],
  templateUrl: './action-dropdown.component.html',
  styleUrl: './action-dropdown.component.scss',
})
export class ActionDropdownComponent {
  @Output() clickEdit = new EventEmitter<void>();
  @Output() clickDelete = new EventEmitter<void>();
}
