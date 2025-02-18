import { getApolloClient } from '../lib/apollo-client';
import { GET_CHARACTERS } from '../graphql/queries';
import type { Character } from '../types/character';

interface CharacterData {
  characters: {
    results: Character[];
    info: {
      pages: number;
      next: number | null;
    };
  };
}

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

export async function fetchCharactersByPage(page: number) {
  const client = getApolloClient();
  
  try {
    const { data } = await client.query<CharacterData>({
      query: GET_CHARACTERS,
      variables: { page }
    });
    return data.characters;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
} 