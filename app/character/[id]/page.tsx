import { getApolloClient } from '../../lib/apollo-client';
import { gql } from '@apollo/client';
import CharacterDetails from '../../components/CharacterDetails';
import AppBar from '../../components/AppBar';

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

export default async function CharacterPage({ params }: { params: { id: string } }) {
  const client = getApolloClient();
  
  try {
    const { data } = await client.query({
      query: GET_CHARACTER,
      variables: { id: params.id }
    });

    return (
      <>
        <AppBar />
        <CharacterDetails character={data.character} />
      </>
    );
  } catch (error) {
    console.error('Error fetching character:', error);
    return <div>Error loading character</div>;
  }
} 