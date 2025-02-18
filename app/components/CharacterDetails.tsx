import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  List,
  ListItem,
  Divider 
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import type { Character } from '../types/character';

interface CharacterDetailsProps {
  character: Character;
}

export default function CharacterDetails({ character }: CharacterDetailsProps) {
  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: { xs: '100%', md: 1200 },
      mx: 'auto',
      p: { xs: 3, md: 3 }  // Increased padding on mobile
    }}>
      <Card sx={{ 
        bgcolor: 'var(--grey)',
        color: 'var(--blue)',
        borderRadius: 2,
        overflow: 'hidden',
        mx: { xs: 0, md: 0 }  // Removed negative margin
      }}>
        <Grid container direction={{ xs: 'column', md: 'row' }}>
          {/* Image Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ 
              position: 'relative', 
              width: '100%',
              height: { xs: '300px', md: '100%' },
              minHeight: { md: '400px' }
            }}>
              <Image
                src={character.image}
                alt={character.name}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>
          </Grid>

          {/* Details Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <CardContent sx={{ py: 3, px: 1 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                {character.name}
              </Typography>

              <List>
                <ListItem>
                  <Box sx={{ width: '120%' }}>
                    <Typography color="var(--blue)" fontWeight="bold">
                      Location
                    </Typography>
                    <Typography color="var(--blue)" fontSize="1.1rem" sx={{ textAlign: 'end', marginTop: 1 }}>
                      {character.location.name}
                    </Typography>
                  </Box>
                </ListItem>
                <Divider sx={{ bgcolor: 'var(--blue)', opacity: 0.2 }} />

                <ListItem>
                  <Box sx={{ width: '100%' }}>
                    <Typography color="var(--blue)" fontWeight="bold">
                      Origin
                    </Typography>
                    <Typography color="var(--blue)" fontSize="1.1rem" sx={{ textAlign: 'end', marginTop: 1 }}>
                      {character.origin.name}
                    </Typography>
                  </Box>
                </ListItem>
                <Divider sx={{ bgcolor: 'var(--blue)', opacity: 0.2 }} />

                <ListItem>
                  <Box sx={{ width: '100%' }}>
                    <Typography color="var(--blue)" fontWeight="bold">
                      Episodes
                    </Typography>
                    <Typography color="var(--blue)" fontSize="1.1rem" sx={{ textAlign: 'end', marginTop: 1 }}>
                      Appeared in {character.episode.length} episodes
                    </Typography>
                  </Box>
                </ListItem>
                <Divider sx={{ bgcolor: 'var(--blue)', opacity: 0.2 }} />

                <ListItem>
                  <Box sx={{ width: '100%' }}>
                    <Typography color="var(--blue)" fontWeight="bold">
                      First Appearance
                    </Typography>
                    <Typography color="var(--blue)" fontSize="1.1rem" sx={{ textAlign: 'end', marginTop: 1 }}>
                      {character.episode[0]?.episode || 'Unknown'}
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
} 