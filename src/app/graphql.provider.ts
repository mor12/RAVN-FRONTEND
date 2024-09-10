import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

const uri = 'https://syn-api-prod.herokuapp.com/graphql'; // <-- add the URL of the GraphQL server here
export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);

  const authLink = setContext((_, { headers }) => {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiOGUxNGM3NWItMmIxOS00ZWY5LWI0MDYtMzFiNTNhODAyMGJmIiwicHJvamVjdElkIjoiYmI4MzM3ZjUtMDhkYy00ZTEyLTgzY2QtNzQ2ZmMwYTg4YzI3IiwiZnVsbE5hbWUiOiJqb3NlIGh1bWJlcnRvIGVzY29iYXIgbWVqaWEiLCJlbWFpbCI6Impvc2VfZXNjb2Jhck1AaG90bWFpbC5lcyIsImlhdCI6MTcyNDUxMTgzOX0.nci0cTKaQwwXRIgttN_Yr0Unn17GbcFIB-ZhjSNtKSI'
    return {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
  }
  )
  return {
    link: authLink.concat(httpLink.create({ uri })),
    cache: new InMemoryCache(),
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
