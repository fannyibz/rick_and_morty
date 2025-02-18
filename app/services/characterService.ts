import { getApolloClient } from '../lib/apollo-client';
import { GET_CHARACTERS } from '../graphql/queries';

export async function fetchInitialCharacters() {
  const client = getApolloClient();
  
  try {
    const { data } = await client.query({
      query: GET_CHARACTERS,
      variables: { page: 1 }
    });
    return data.characters.results;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
} 