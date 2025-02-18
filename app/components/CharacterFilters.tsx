import { 
  Box, 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  Stack
} from '@mui/material';

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
  return (
    <Box sx={{ 
      mb: 4, 
      width: '100%', 
      maxWidth: 1200, 
      mx: 'auto',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        spacing={2} 
        sx={{ 
          p: 2,
          borderRadius: 2,
          maxWidth: 'fit-content',
          '& .MuiFormControl-root': {
            bgcolor: 'var(--grey)',
            borderRadius: 1,
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)'
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
    </Box>
  );
} 