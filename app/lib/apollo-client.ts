import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

let client: ApolloClient<NormalizedCacheObject> | null = null;

export function getApolloClient() {
  // Create a new client for server-side rendering
  if (typeof window === 'undefined') {
    return new ApolloClient({
      uri: "https://rickandmortyapi.com/graphql",
      cache: new InMemoryCache(),
      ssrMode: true, // Enable SSR mode
    });
  }

  // Reuse client on the client-side
  if (!client) {
    client = new ApolloClient({
      uri: "https://rickandmortyapi.com/graphql",
      cache: new InMemoryCache(),
    });
  }

  return client;
} 