import { Component } from '@angular/core';
import { TableTaskComponent } from '../../components/task/table-task/table-task.component';
import { Task } from '../../interfaces/Task.interface';
import { Observable } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { AsyncPipe } from '@angular/common';
import { FilterTaskInput } from '../../interfaces/FilterTaskInput.interface';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TableTaskComponent, AsyncPipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  tasks$: Observable<Task[]>;

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.tasks$;
  }
}
