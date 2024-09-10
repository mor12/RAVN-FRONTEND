import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { Status } from '../enums/Status.enum';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of tasks', () => {
    const tasks = service.getTasks({});
    tasks.subscribe((tasks) => {
      expect(tasks).toBeDefined();
    });
  });

  it('should return a list of tasks with a filter', () => {
    const tasks = service.getTasks({ status: Status.IN_PROGRESS });
    tasks.subscribe((tasks) => {
      expect(tasks).toBeDefined();
    });
  });
});
