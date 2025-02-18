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

interface FilterOptions {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
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

export async function fetchCharactersByPage(page: number, filters: FilterOptions) {
  const client = getApolloClient();
  
  try {
    const { data } = await client.query<CharacterData>({
      query: GET_CHARACTERS,
      variables: {
        page,
        ...filters
      }
    });
    return data.characters;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
} 