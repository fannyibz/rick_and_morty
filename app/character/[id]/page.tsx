import { getApolloClient } from '../../lib/apollo-client';
import { gql } from '@apollo/client';
import CharacterDetails from '../../components/CharacterDetails';
import AppBar from '../../components/AppBar';
import Footer from '@/app/components/Footer';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      location {
        id
        name
      }
      origin {
        id
        name
      }
      episode {
        id
        episode
        air_date
      }
    }
  }
`;

interface CharacterPageProps {
  params: {
    id: string;
  };
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const client = getApolloClient();
  
  try {
    const { data } = await client.query({
      query: GET_CHARACTER,
      variables: { id: params.id }
    });

    return (
      <main style={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '80px'
      }}>
        <AppBar />
        <CharacterDetails character={data.character} />
        <Footer />
      </main>
    );
  } catch (error) {
    console.error('Error fetching character:', error);
    return <div>Error loading character</div>;
  }
} 