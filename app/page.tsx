import AppBar from './components/AppBar';
import Index from './components/index';
import ApolloClientProvider from './components/ApolloClientProvider';
import { fetchInitialCharacters } from './services/characterService';

export const metadata = {
  title: 'Rick and Morty',
  description: 'Rick and Morty Character Explorer',
};

export default async function Home() {
  try {
    const initialCharacters = await fetchInitialCharacters();

    return (
      <ApolloClientProvider>
        <main>
          <AppBar />
          <Index initialCharacters={initialCharacters} />
        </main>
      </ApolloClientProvider>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading data</div>;
  }
}