import styles from "./page.module.css";
import { getApolloClient } from './lib/apollo-client';
import CharacterList from './components/CharacterList';
import { GET_CHARACTERS } from './graphql/queries';

export const metadata = {
  title: 'Rick and Morty',
  description: 'Rick and Morty Character Explorer',
};
export default async function Home() {
  const client = getApolloClient();
  
  try {
    const { data } = await client.query({
      query: GET_CHARACTERS
    });

    return (
      <div className={styles.container}>
        <h1>Rick and Morty</h1>
        <CharacterList initialCharacters={data.characters.results} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div className={styles.container}>
        <h1>Error loading data</h1>
      </div>
    );
  }
}