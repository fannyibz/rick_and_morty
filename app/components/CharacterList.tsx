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
import React from 'react';

interface CharacterListProps {
  initialCharacters: Character[];
  filters: {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
  };
  onFilterChange: (name: string, value: string) => void;
}

export default function CharacterList({ 
  initialCharacters, 
  filters, 
  onFilterChange 
}: CharacterListProps) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState(initialCharacters);
  const [totalPages, setTotalPages] = useState(1);
  const isFirstRender = React.useRef(true);

  const hasActiveFilters = React.useCallback(() => {
    return Object.values(filters).some(value => value !== '');
  }, [filters]);

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

    if (isFirstRender.current && page === 1 && !hasActiveFilters()) {
      isFirstRender.current = false;
      setCharacters(initialCharacters);
    } else {
      loadCharacters();
    }
  }, [page, filters, initialCharacters, hasActiveFilters]);

  const handleFilterChange = (name: string, value: string) => {
    onFilterChange(name, value);
    setPage(1);
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
        columns={{ xs: 9, sm: 8, md: 12 }}
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
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6}}>
          <Pagination 
            count={totalPages} 
            page={page} 
            onChange={handlePageChange}
            color="primary"
            variant="outlined"
            shape="rounded"
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'var(--blue)',
                borderColor: 'var(--blue)',
                '&.Mui-selected': {
                  backgroundColor: 'var(--blue)',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: 'var(--blue)',
                    opacity: 0.8
                  }
                },
                '&:hover': {
                  backgroundColor: 'rgba(var(--blue-rgb), 0.04)'
                }
              },
              '& .MuiPagination-ul': {
                justifyContent: 'center'
              },
              marginBottom: 2
            }}
          />
        </Box>
      )}
    </>
  );
} 