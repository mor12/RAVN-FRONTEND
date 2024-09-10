import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { User } from '../interfaces/User.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userFragment = gql`
  fragment UserFields on User {
    avatar,
    createdAt,
    email,
    fullName,
    id,
    type,
    updatedAt,
  }`;

  constructor(private apollo: Apollo) { }

  getUsers(): Observable<User[]> {
    return this.apollo.query({
      query: gql`
        query {
          users {
            ...UserFields
          }
        }
        ${this.userFragment}
      `,
    }).pipe(map((response: any) => response.data.users));
  }

}
