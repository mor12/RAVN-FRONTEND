import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import { Subscription } from 'rxjs';
import { TagList, TaskTag } from '../../../enums/TaskTag.enum';

@Component({
  selector: 'app-tags-dropdown',
  standalone: true,
  imports: [MatMenuModule, MatCheckboxModule],
  templateUrl: './tags-dropdown.component.html',
  styleUrl: './tags-dropdown.component.scss',
})
export class TagsDropdownComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  subscription!: Subscription;

  @Input() tagList: TagList[] = [];
  @Output() changeTags = new EventEmitter<TagList[]>();

  ngAfterViewInit(): void {
    this.subscription = this.trigger.menuClosed.subscribe(() => {
      let tagsChecked = this.tagList.filter((item) => item.checked);
      this.changeTags.emit(tagsChecked);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleClick(e: MatCheckboxChange, key: TaskTag) {
    this.tagList = this.tagList.map((item) => {
      if (item.key === key) return { ...item, checked: e.checked };
      return item;
    });
  }
}
