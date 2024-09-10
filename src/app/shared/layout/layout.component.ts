import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopNavigationBarComponent } from '../top-navigation-bar/top-navigation-bar.component';
import { SwitchButtonComponent } from '../switch-button/switch-button.component';
import { ButtonComponent } from '../button/button.component';
import { TaskDialogComponent } from '../../components/task/task-dialog/task-dialog.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SidebarComponent,
    TopNavigationBarComponent,
    TopNavigationBarComponent,
    SwitchButtonComponent,
    ButtonComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  readonly dialog = inject(MatDialog);

  openModal() {
    this.dialog.open(TaskDialogComponent);
  }
}
