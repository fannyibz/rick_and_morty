'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Character } from '../types/character';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
// props that the CharacterList component expects to receive
interface CharacterListProps {
  initialCharacters: Character[];
}

export default function CharacterList({ initialCharacters }: CharacterListProps) {
  const [characters] = useState<Character[]>(initialCharacters);

  return (
    <Grid 
      container 
      spacing={{ xs: 2, md: 3 }} 
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent="center"
    >
      {characters.map((character, index) => (
        <Grid size={3} key={character.id}>
          <Card sx={{ 
            maxWidth: 300,
            height: '100%',
            transition: 'all 0.2s',
            '&:hover': { 
              transform: 'translateY(-4px)',
              boxShadow: 3
            }
          }}>
            <CardMedia sx={{ position: 'relative', paddingTop: '100%' }}>
              <Image 
                src={character.image} 
                alt={character.name}
                fill
                sizes="(max-width: 600px) 100vw, 300px"
                style={{ objectFit: 'cover' }}
                priority={index < 3}
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom sx={{
                '&:hover': { color: 'primary.main' }
              }}>
                {character.name}
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Typography variant="body1">
                  <Typography component="span" fontWeight="medium">Location: </Typography>
                  {character.location.name}
                </Typography>
                <Typography variant="body1">
                  <Typography component="span" fontWeight="medium">Origin: </Typography>
                  {character.origin.name}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
} 