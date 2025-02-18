'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CharacterList from './CharacterList';
import Footer from './Footer';
import type { Character } from '../types/character';
import { useState } from 'react';

interface IndexProps {
  initialCharacters: Character[];
}

export default function Index({ initialCharacters }: IndexProps) {
  const [filters, setFilters] = useState({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: ''
  });

  const handleFilterChange = (name: string, value: string) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Box>
        <Container>
          <Box py={{ xs: 1, md: 4 }} mx={{ md: 2 }}>
            <CharacterList 
              initialCharacters={initialCharacters}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
} 