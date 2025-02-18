import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import type { Character } from '../types/character';

export default function CharacterCard({ character, index }: { character: Character, index: number }) {
  return (
    <Link href={`/character/${character.id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ 
        maxWidth: 300,
        height: '100%',
        bgcolor: 'var(--grey)',
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
      
        <CardContent sx={{ 
          padding: { xs: 0, sm: 2 },
          '&:last-child': {
            paddingBottom: { xs: 0.5, sm: 2 }
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 64
        }}>
          <Typography variant="h5" component="h2" sx={{ 
            color: 'var(--blue)',
            fontSize: { xs: '1rem', md: '1.2rem' },
            margin: 0,
            textAlign: 'center'
            }}>
            {character.name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}