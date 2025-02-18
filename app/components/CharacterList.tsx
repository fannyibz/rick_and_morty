'use client';

import { useState, useEffect } from 'react';
import type { Character } from '../types/character';
import { 
  Box, 
  CircularProgress,
  Pagination 
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import CharacterCard from './CharacterCard';
import { fetchCharactersByPage } from '../services/characterService';
import CharacterFilters from './CharacterFilters';

interface CharacterListProps {
  initialCharacters: Character[];
}

export default function CharacterList({ initialCharacters }: CharacterListProps) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState(initialCharacters);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: ''
  });

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true);
      try {
        const data = await fetchCharactersByPage(page, filters);
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } catch (error) {
        console.error('Error loading characters:', error);
      } finally {
        setLoading(false);
      }
    };

    if (page === 1 && !hasActiveFilters()) {
      setCharacters(initialCharacters);
    } else {
      loadCharacters();
    }
  }, [page, filters, initialCharacters]);

  const hasActiveFilters = () => {
    return Object.values(filters).some(value => value !== '');
  };

  const handleFilterChange = (name: string, value: string) => {
    setFilters(prev => ({ ...prev, [name]: value }));
    setPage(1); // Reset to first page when filters change
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <CharacterFilters 
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      
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