import { Status } from '../enums/Status.enum';
import { PointEstimate } from '../enums/PointEstimate.enum';
import { TaskTag } from '../enums/TaskTag.enum';
import { User } from './User.interface';

export interface Task {
  assignee: User;
  createdAt: string;
  creator: User;
  dueDate: string;
  id: string;
  name: string;
  pointEstimate: PointEstimate;
  position: number;
  status: Status;
  tags: TaskTag[];
}

export interface CreateTaskInput {
  assigneeId: String
  dueDate?: string;
  name?: String;
  pointEstimate?: PointEstimate;
  status?: Status
  tags?: TaskTag[]
}

export interface UpdateTaskInput {
  assigneeId: String;
  dueDate: string;
  id: string;
  name: String;
  pointEstimate: PointEstimate;
  position: number;
  status: Status;
  tags: TaskTag[];
}