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
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        bgcolor: 'var(--grey)',
        color: 'var(--blue)',
        borderRadius: 2,
        overflow: 'hidden'
      }}>
        <Grid container>
          {/* Image Section */}
          <Grid size={6}>
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
          <Grid size={6}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                {character.name}
              </Typography>

              <List>
                <ListItem>
                  <Box>
                    <Typography color="var(--blue)" fontWeight="bold">
                      Location
                    </Typography>
                    <Typography color="var(--blue)" fontSize="1.1rem">
                      {character.location.name}
                    </Typography>
                  </Box>
                </ListItem>
                <Divider sx={{ bgcolor: 'var(--blue)', opacity: 0.2 }} />

                <ListItem>
                  <Box>
                    <Typography color="var(--blue)" fontWeight="bold">
                      Origin
                    </Typography>
                    <Typography color="var(--blue)" fontSize="1.1rem">
                      {character.origin.name}
                    </Typography>
                  </Box>
                </ListItem>
                <Divider sx={{ bgcolor: 'var(--blue)', opacity: 0.2 }} />

                <ListItem>
                  <Box>
                    <Typography color="var(--blue)" fontWeight="bold">
                      Episodes
                    </Typography>
                    <Typography color="var(--blue)" fontSize="1.1rem">
                      Appeared in {character.episode.length} episodes
                    </Typography>
                  </Box>
                </ListItem>
                <Divider sx={{ bgcolor: 'var(--blue)', opacity: 0.2 }} />

                <ListItem>
                  <Box>
                    <Typography color="var(--blue)" fontWeight="bold">
                      First Appearance
                    </Typography>
                    <Typography color="var(--blue)" fontSize="1.1rem">
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