import { Component, inject, OnInit } from '@angular/core';
import { TagsComponent } from '../../../shared/tags/tags.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { EstimateDropdownComponent } from '../estimate-dropdown/estimate-dropdown.component';
import { AssigneeDropdownComponent } from '../assignee-dropdown/assignee-dropdown.component';
import { TagsDropdownComponent } from '../tags-dropdown/tags-dropdown.component';
import {
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_NATIVE_DATE_FORMATS,
  MatNativeDateModule,
  NativeDateAdapter,
} from '@angular/material/core';
import { pointEstimateList } from '../../../constants/pointEstimateList';
import { PointEstimate } from '../../../enums/PointEstimate.enum';
import { User } from '../../../interfaces/User.interface';
import { AvatarComponent } from '../../../shared/avatar/avatar.component';
import { TagList, TaskTag } from '../../../enums/TaskTag.enum';
import { tagList } from '../../../constants/tagList';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../../interfaces/DialogData.interface';
import { UsersService } from '../../../services/users.service';
import { Observable } from 'rxjs';
import { TaskService } from '../../../services/task.service';
import { Status } from '../../../enums/Status.enum';

@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [
    TagsComponent,
    ButtonComponent,
    EstimateDropdownComponent,
    AssigneeDropdownComponent,
    TagsDropdownComponent,
    AvatarComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    DatePipe,
    AsyncPipe
  ],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
  ],
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.scss',
})
export class TaskDialogComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<TaskDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  listPointEstimate = pointEstimateList;
  users$: Observable<User[]>;
  listTag: TagList[] = tagList;

  estimate?: PointEstimate;
  assignee?: User;
  tags: TagList[] = [];
  date?: string;
  taskName = '';

  error?: string;

  constructor(private userService: UsersService, private taskService: TaskService) {
    this.users$ = this.userService.getUsers();
  }

  ngOnInit(): void {
    if (this.data && this.data.isEdit && this.data.task) {
      this.estimate = this.data.task?.pointEstimate;
      this.assignee = this.data.task?.assignee;
      this.tags = this.setupTags(this.data.task?.tags);
      this.date = this.data.task?.dueDate;
      this.taskName = this.data.task?.name;
      this.setTagsSelected(this.tags);
    }
  }

  setupTags(tags?: TaskTag[]): TagList[] {
    if (!tags || tags.length === 0) return [];

    return tagList.filter((tag) => {
      return tags.find((t) => t === tag.key);
    });
  }

  setTagsSelected(selected: TagList[]) {
    this.listTag = tagList.map((tag) => {
      if (selected.find((t) => t.key === tag.key)) {
        return { ...tag, checked: true };
      }

      return tag;
    });
  }

  handleDate(e: MatDatepickerInputEvent<string>) {
    if (e.value) {
      this.date = e.value;
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveTask() {
    if (this.data?.isEdit && this.data.task) {

      if (!this.taskName || !this.estimate || !this.assignee || !this.date) {
        this.error = 'Please fill all fields';
        return;
      }

      this.taskService.updateTask({
        id: this.data.task.id,
        name: this.taskName,
        pointEstimate: this.estimate,
        assigneeId: this.assignee.id,
        tags: this.tags.map((tag) => tag.key),
        dueDate: this.date,
        status: Status.BACKLOG,
        position: this.data.task.position
      }).subscribe((task) => {
        this.dialogRef.close();
      });

    } else {

      if (!this.taskName || !this.estimate || !this.assignee || !this.date) {
        this.error = 'Please fill all fields';
        return;
      }

      this.taskService.createTask({
        name: this.taskName,
        pointEstimate: this.estimate,
        assigneeId: this.assignee.id,
        tags: this.tags.map((tag) => tag.key),
        dueDate: this.date,
        status: Status.BACKLOG
      }).subscribe((task) => {
        this.dialogRef.close();
      });
    }
  }
}
