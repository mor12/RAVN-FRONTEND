import { Status } from '../enums/Status.enum';
import { PointEstimate } from '../enums/PointEstimate.enum';
import { TaskTag } from '../enums/TaskTag.enum';
import { Task } from '../interfaces/Task.interface';
import { userList } from './userList';

export const taskList: Task[] = [
  {
    assignee: userList[0],
    createdAt: '',
    creator: userList[0],
    dueDate: new Date().toString(),
    id: '1',
    name: 'Test task',
    pointEstimate: PointEstimate.FOUR,
    position: 1,
    status: Status.TODO,
    tags: [TaskTag.IOS],
  },
  {
    assignee: userList[2],
    createdAt: '',
    creator: userList[2],
    dueDate: new Date().toString(),
    id: '1',
    name: 'Test task2',
    pointEstimate: PointEstimate.FOUR,
    position: 2,
    status: Status.TODO,
    tags: [TaskTag.ANDROID],
  },
  {
    assignee: userList[3],
    createdAt: '',
    creator: userList[3],
    dueDate: new Date().toString(),
    id: '1',
    name: 'Test task3',
    pointEstimate: PointEstimate.FOUR,
    position: 3,
    status: Status.IN_PROGRESS,
    tags: [TaskTag.IOS, TaskTag.NODE_JS],
  },
];
