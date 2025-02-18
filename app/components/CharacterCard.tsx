import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import type { Character } from '../types/character';

export default function CharacterCard({ character, index }: { character: Character, index: number }) {
  return (
    <Link href={`/character/${character.id}`} style={{ textDecoration: 'none' }}>
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
            <Box sx={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 1 }}>
              <Typography variant="body1" fontWeight="medium">Location:</Typography>
              <Typography variant="body1">{character.location.name}</Typography>
              <Typography variant="body1" fontWeight="medium">Origin:</Typography>
              <Typography variant="body1">{character.origin.name}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}