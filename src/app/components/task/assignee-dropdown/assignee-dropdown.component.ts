import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { AvatarComponent } from '../../../shared/avatar/avatar.component';
import { User } from '../../../interfaces/User.interface';

@Component({
  selector: 'app-assignee-dropdown',
  standalone: true,
  imports: [MatMenuModule, AvatarComponent],
  templateUrl: './assignee-dropdown.component.html',
  styleUrl: './assignee-dropdown.component.scss',
})
export class AssigneeDropdownComponent {
  @Input() listUser!: User[] | null;
  @Output() changeUser = new EventEmitter<User>();

  handleClick(user: User) {
    this.changeUser.emit(user);
  }
}
