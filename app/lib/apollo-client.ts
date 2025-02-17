import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

let client: ApolloClient<NormalizedCacheObject> | null = null;

export function getApolloClient() {
  if (!client || typeof window === 'undefined') {
    client = new ApolloClient({
      uri: "https://rickandmortyapi.com/graphql",
      cache: new InMemoryCache(),
      defaultOptions: {
        query: {
          fetchPolicy: 'network-only',
        },
        watchQuery: {
          fetchPolicy: 'network-only',
        },
      },
    });
  }
  return client;
} 