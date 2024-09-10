import { Component } from '@angular/core';
import { CardListComponent } from '../../components/dashboard/card-list/card-list.component';
import { Task } from '../../interfaces/Task.interface';
import { filterTaskByStatus } from '../../shared/utils/task.utils';
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardListComponent, AsyncPipe, CdkDropListGroup],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  tasks$: Observable<Task[]>;
  backlogTasks: Task[] = [];
  todoTasks: Task[] = [];
  doneTasks: Task[] = [];
  inProgressTasks: Task[] = [];
 
  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.tasks$;
    this.tasks$.subscribe((tasks) => {
      this.backlogTasks = this.filterByStatus(tasks, 'BACKLOG');
      this.todoTasks = this.filterByStatus(tasks, 'TODO');
      this.doneTasks = this.filterByStatus(tasks, 'DONE');
      this.inProgressTasks = this.filterByStatus(tasks, 'IN_PROGRESS');
    });
  }

  filterByStatus(list: Task[], status: string): Task[] {
    console.log('filterByStatus');
    return filterTaskByStatus(list, status);
  }
}
