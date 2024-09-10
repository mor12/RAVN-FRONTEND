import { Component, inject, Input } from '@angular/core';
import { TagsComponent } from '../../../shared/tags/tags.component';
import { AvatarComponent } from '../../../shared/avatar/avatar.component';
import { Task } from '../../../interfaces/Task.interface';
import { PointEstimate } from '../../../enums/PointEstimate.enum';
import { TaskTag } from '../../../enums/TaskTag.enum';
import { pointEstimateList } from '../../../constants/pointEstimateList';
import { tagList } from '../../../constants/tagList';
import { DatePipe } from '@angular/common';
import { ActionDropdownComponent } from '../action-dropdown/action-dropdown.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../../task/task-dialog/task-dialog.component';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TagsComponent, AvatarComponent, DatePipe, ActionDropdownComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() task!: Task;
  readonly dialog = inject(MatDialog);

  constructor(private taskService: TaskService) { }

  getPointEstimate(estimate: PointEstimate) {
    return pointEstimateList[estimate];
  }

  getTag(tag: TaskTag) {
    return tagList.find((t) => t.key === tag);
  }

  onEdit() {
    console.log('editing ...');
    this.dialog.open(TaskDialogComponent, {
      width: '600px',
      minWidth: '600px',
      data: { isEdit: true, task: this.task },
    });
  }

  onDelete() {
    this.taskService.deleteTask(this.task.id).subscribe();
  }
}
