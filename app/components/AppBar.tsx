'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter, usePathname } from 'next/navigation';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export default function ProminentAppBar() {
  const router = useRouter();
  const pathname = usePathname();
  const showBackButton = pathname !== '/';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'var(--grey)' }}>
        <StyledToolbar>
          {showBackButton && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="back"
              onClick={() => router.back()}
              sx={{ mr: 2, color: 'var(--blue)' }}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ 
              flexGrow: 1, 
              alignSelf: 'flex-end',
              textAlign: 'center',
              color: 'var(--blue)'
            }}
          >
            <Box  sx={{ color: 'var(--blue)', mt: 18, mb: 14 }}>
              <h1>Rick and Morty</h1>
            </Box>
          </Typography>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}