import { ApolloClient, InMemoryCache } from '@apollo/client';

export function getApolloClient() {
  // Create a new client for server-side rendering
  return new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });
} 