import { Task } from '../../interfaces/Task.interface';

export const filterTaskByStatus = (list: Task[], status: string): Task[] => {
  return list.filter((task) => task.status === status);
};
