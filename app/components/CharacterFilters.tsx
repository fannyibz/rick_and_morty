import { 
  Box, 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  Stack,
  Drawer,
  Button
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useState } from 'react';

interface FilterProps {
  filters: {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
  };
  onFilterChange: (name: string, value: string) => void;
}

export default function CharacterFilters({ filters, onFilterChange }: FilterProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const FilterContent = () => (
    <Stack 
      direction={{ xs: 'column', sm: 'row' }} 
      spacing={{ xs: 1.5, sm: 2 }}
      sx={{ 
        width: { xs: '100%', sm: 'auto' },
        p: { xs: 1, sm: 2 },
        borderRadius: 2,
        '& .MuiFormControl-root': {
          width: { xs: '100%', sm: 120 },
          minWidth: { xs: '100%', sm: 120 },
          bgcolor: 'var(--grey)',
          borderRadius: 1,
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: { xs: 'none', sm: 'scale(1.05)' }
          }
        },
        '& .MuiInputLabel-root': {
          color: 'var(--blue)'
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'var(--blue)'
        },
        '& .MuiInputLabel-shrink': {
          color: 'var(--blue)'
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'var(--blue)'
          },
          '&:hover fieldset': {
            borderColor: 'var(--blue)'
          },
          '&.Mui-focused fieldset': {
            borderColor: 'var(--blue)'
          }
        },
        '& .MuiSvgIcon-root': {
          color: 'var(--blue)'
        },
        '& .MuiInputBase-input': {
          color: 'var(--blue)'
        },
        '& .MuiMenu-paper': {
          bgcolor: 'var(--grey)'
        },
        '& .MuiMenuItem-root': {
          color: 'var(--blue)',
          '&:hover': {
            bgcolor: 'rgba(158, 204, 199, 0.1)'
          }
        }
      }}
    >
      <TextField
        label="Name"
        value={filters.name}
        onChange={(e) => onFilterChange('name', e.target.value)}
        sx={{ minWidth: 120 }}
      />
      
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Status</InputLabel>
        <Select
          value={filters.status}
          label="Status"
          onChange={(e) => onFilterChange('status', e.target.value)}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: 'var(--grey)',
                '& .MuiMenuItem-root': {
                  color: 'var(--blue)'
                }
              }
            }
          }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="alive">Alive</MenuItem>
          <MenuItem value="dead">Dead</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Gender</InputLabel>
        <Select
          value={filters.gender}
          label="Gender"
          onChange={(e) => onFilterChange('gender', e.target.value)}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: 'var(--grey)',
                '& .MuiMenuItem-root': {
                  color: 'var(--blue)'
                }
              }
            }
          }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="genderless">Genderless</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Species"
        value={filters.species}
        onChange={(e) => onFilterChange('species', e.target.value)}
        sx={{ minWidth: 120 }}
      />

      <TextField
        label="Type"
        value={filters.type}
        onChange={(e) => onFilterChange('type', e.target.value)}
        sx={{ minWidth: 120 }}
      />
    </Stack>
  );

  return (
    <Box sx={{ mb: 4, width: '100%', maxWidth: 1200, mx: 'auto' }}>
      {/* Desktop view */}
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center' }}>
        <FilterContent />
      </Box>

      {/* Mobile view - Sticky Footer */}
      <Box 
        sx={{ 
          display: { xs: 'block', sm: 'none' },
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 2,
          backgroundColor: 'var(--grey)',
          borderTop: '1px solid var(--blue)',
          zIndex: 1000,
        }}
      >
        <Button
          onClick={handleDrawerToggle}
          startIcon={<FilterListIcon />}
          fullWidth
          sx={{
            color: 'var(--blue)',
            borderColor: 'var(--blue)',
            '&:hover': {
              borderColor: 'var(--blue)',
              backgroundColor: 'rgba(158, 204, 199, 0.1)'
            }
          }}
          variant="outlined"
        >
          Filters
        </Button>
      </Box>

      <Drawer
        anchor="bottom"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            bgcolor: 'var(--grey)',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            px: 2,
            py: 3
          }
        }}
      >
        <FilterContent />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Button 
            onClick={handleDrawerToggle}
            sx={{
              color: 'var(--blue)',
              borderColor: 'var(--blue)',
              '&:hover': {
                borderColor: 'var(--blue)',
                backgroundColor: 'rgba(158, 204, 199, 0.1)'
              }
            }}
            variant="outlined"
          >
            Close
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
} 