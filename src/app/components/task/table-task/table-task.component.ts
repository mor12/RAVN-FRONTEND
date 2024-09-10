import { Component, Input } from '@angular/core';
import { TableTaskItemComponent } from '../table-task-item/table-task-item.component';
import { Task } from '../../../interfaces/Task.interface';
import { filterTaskByStatus } from '../../../shared/utils/task.utils';

@Component({
  selector: 'app-table-task',
  standalone: true,
  imports: [TableTaskItemComponent],
  templateUrl: './table-task.component.html',
  styleUrl: './table-task.component.scss',
})
export class TableTaskComponent {
  @Input() tasks!: Task[];

  filterByStatus(list: Task[], status: string): Task[] {
    return filterTaskByStatus(list, status);
  }
}
