import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { TagsComponent } from '../../../shared/tags/tags.component';
import { DatePipe, NgClass, NgStyle } from '@angular/common';
import { Task } from '../../../interfaces/Task.interface';
import { AvatarComponent } from '../../../shared/avatar/avatar.component';
import { PointEstimate } from '../../../enums/PointEstimate.enum';
import { pointEstimateList } from '../../../constants/pointEstimateList';
import { TaskTag } from '../../../enums/TaskTag.enum';
import { tagList } from '../../../constants/tagList';

@Component({
  selector: 'app-table-task-item',
  standalone: true,
  imports: [
    MatExpansionModule,
    TagsComponent,
    NgStyle,
    NgClass,
    AvatarComponent,
    DatePipe,
  ],
  templateUrl: './table-task-item.component.html',
  styleUrl: './table-task-item.component.scss',
})
export class TableTaskItemComponent {
  @Input() title!: string;
  @Input() tasks!: Task[];

  expanded: boolean = true;

  getPointEstimate(estimate: PointEstimate) {
    return pointEstimateList[estimate];
  }

  getTag(tag: TaskTag) {
    return tagList.find((t) => t.key === tag);
  }
}
