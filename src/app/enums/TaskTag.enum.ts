export enum TaskTag {
  ANDROID = 'ANDROID',
  IOS = 'IOS',
  NODE_JS = 'NODE_JS',
  RAILS = 'RAILS',
  REACT = 'REACT',
}

export interface TagList {
  key: TaskTag;
  value: string;
  color: 'primary' | 'secondary' | 'tertiary';
  checked: boolean;
}
