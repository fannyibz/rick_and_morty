'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: { xs: 80, md: 128 },
  },
}));

export default function ProminentAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'var(--grey)' }}>
        <StyledToolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ 
              flexGrow: 1, 
              alignSelf: 'flex-end',
              textAlign: 'center',
              color: 'var(--blue)',
              fontSize: { xs: '1.2rem', md: '2rem' }
            }}
          >
            <Box sx={{ 
              color: 'var(--blue)',
              mt: { xs: 2, md: 18 }, 
              mb: { xs: 2, md: 14 } 
            }}>
              <h1>Rick and Morty</h1>
            </Box>
          </Typography>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}