'use client';

import { Box, Typography, Link, useMediaQuery, IconButton } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Footer() {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width:600px)');
  const pathname = usePathname();
  const isIndex = pathname === '/';
  const showBackButton = !isIndex;

  if (isMobile && isIndex) {
    return null;
  }

  return (
    <Box 
      component="footer" 
      sx={{
        bgcolor: 'var(--grey)',
        color: 'var(--blue)',
        py: 3,
        px: 2,
        textAlign: 'center',
        borderTop: '1px solid',
        borderColor: 'rgba(var(--blue-rgb), 0.2)',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1000
      }}
    >
      {showBackButton && (
        <IconButton
          onClick={() => router.back()}
          sx={{
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--blue)'
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      )}
      {!isMobile && (
        <Typography variant="body2">
          Data provided by{' '}
          <Link 
            href="https://rickandmortyapi.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ 
              color: 'inherit',
              textDecoration: 'underline',
              '&:hover': {
                opacity: 0.8
              }
            }}
          >
            The Rick and Morty API
          </Link>
        </Typography>
      )}
    </Box>
  );
} 