'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CharacterList from './CharacterList';
import type { Character } from '../types/character';

interface IndexProps {
  initialCharacters: Character[];
}

export default function Index({ initialCharacters }: IndexProps) {
  return (
    <Box>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          py={4}
        >
          <CharacterList initialCharacters={initialCharacters} />
        </Box>
      </Container>
    </Box>
  );
} 