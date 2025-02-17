import styles from "./page.module.css";
import { getApolloClient } from './lib/apollo-client';
import CharacterList from './components/CharacterList';
import { GET_CHARACTERS } from './graphql/queries';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from './components/AppBar';
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
      <main>
        <AppBar />
        <Box sx={{ paddingTop: "64px" }}>
          <Container>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              py={4}
            >
              {/* <Box mb={8}>
                <h1>Rick and Morty</h1>
              </Box> */}
              <CharacterList initialCharacters={data.characters.results} />
            </Box>
          </Container>
        </Box>
      </main>
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