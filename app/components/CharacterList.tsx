'use client';

import { useState } from 'react';
import type { Character } from '../types/character';
import { 
  Box, 
  CircularProgress,
  Pagination 
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/queries';
import CharacterCard from './CharacterCard';

interface CharacterListProps {
  initialCharacters: Character[];
}

interface CharacterData {
  characters: {
    results: Character[];
    info: {
      pages: number;
      next: number | null;
    };
  };
}

export default function CharacterList({ initialCharacters }: CharacterListProps) {
  const [page, setPage] = useState(1);
  
  const { loading, data } = useQuery<CharacterData>(GET_CHARACTERS, {
    variables: { page },
  });

  const characters = page === 1 ? initialCharacters : data?.characters?.results || [];
  const totalPages = data?.characters?.info?.pages || 1;

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Grid 
        container 
        spacing={{ xs: 2, md: 3 }} 
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
      >
        {characters.map((character, index) => (
          <Grid size={3} key={character.id}>
            <CharacterCard character={character} index={index} />
          </Grid>
        ))}
      </Grid>
      
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>
          <Pagination 
            count={totalPages} 
            page={page} 
            onChange={handlePageChange}
            color="primary"
            size="large"
          />
        </Box>
      )}
    </>
  );
} 