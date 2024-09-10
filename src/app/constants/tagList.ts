import { TagList, TaskTag } from '../enums/TaskTag.enum';

export const tagList: TagList[] = [
  { key: TaskTag.ANDROID, value: 'ANDROID', color: 'primary', checked: false },
  { key: TaskTag.IOS, value: 'IOS', color: 'secondary', checked: false },
  { key: TaskTag.NODE_JS, value: 'NODE JS', color: 'tertiary', checked: false },
  { key: TaskTag.RAILS, value: 'RAILS', color: 'primary', checked: false },
  { key: TaskTag.REACT, value: 'REACT', color: 'secondary', checked: false },
];
