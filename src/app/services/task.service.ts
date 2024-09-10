import { Injectable, input } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { CreateTaskInput, Task, UpdateTaskInput } from '../interfaces/Task.interface';
import { FilterTaskInput } from '../interfaces/FilterTaskInput.interface';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks$: Observable<Task[]> = new Observable();

  private taskFragment = gql`
  fragment TaskFields on Task {
    assignee {
      avatar,
      createdAt,
      email,
      fullName,
      id,
      type,
      updatedAt,
    }
    createdAt
    creator {
    avatar,
      createdAt,
      email,
      fullName,
      id,
      type,
      updatedAt,
    }
    dueDate
    id
    name
    pointEstimate
    position
    status
    tags
  }
`;

  private GET_TASKS = gql`
    query($input: FilterTaskInput!) {
      tasks(input: $input) {
        ...TaskFields
      }
    }
    ${this.taskFragment}
  `;

  public filterTask: FilterTaskInput = {};

  constructor(private apollo: Apollo) {
    this.tasks$ = this.apollo.watchQuery({
      query: gql`
        ${this.GET_TASKS}
      `,
      variables: {
        input: this.filterTask,
      },
    }).valueChanges.pipe(map((response: any) => response.data.tasks));
  }



  createTask(task: CreateTaskInput): Observable<Task> {
    return this.apollo.mutate({
      mutation: gql`
        mutation($input: CreateTaskInput!) {
          createTask(input: $input) {
            ...TaskFields
          }
        }
        ${this.taskFragment}
      `,
      refetchQueries: [
        {
          query: this.GET_TASKS,
          variables: {
            input: this.filterTask,
          },
        },
      ],
      variables: {
        input: task
      },
    }).pipe(map((response: any) => response.data.createTask))
  }

  updateTask(task: UpdateTaskInput): Observable<Task> {
    return this.apollo.mutate({
      mutation: gql`
        mutation($input: UpdateTaskInput!) {
          updateTask(input: $input) {
            ...TaskFields
          }
        }
        ${this.taskFragment}
      `,
      refetchQueries: [
        {
          query: this.GET_TASKS,
          variables: {
            input: this.filterTask,
          },
        },
      ],
      variables: {
        input: task,
      },
    }).pipe(map((response: any) => response.data.updateTask));
  }

  deleteTask(id: string): Observable<Task> {
    return this.apollo.mutate({
      mutation: gql`
        mutation($input: DeleteTaskInput!) {
          deleteTask(input: $input) {
            ...TaskFields
          }
        }
        ${this.taskFragment}
      `,
      refetchQueries: [
        {
          query: this.GET_TASKS,
          variables: {
            input: this.filterTask,
          },
        },
      ],
      variables: {
        input: { id }
      },
    }).pipe(map((response: any) => response.data.deleteTask));
  }

}
