import { Box, Typography, Container } from '@mui/material'


export default function Footer() {
  return (
    <Box 
      sx={{
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        py: 6,
        mt: 12
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          <Typography 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.9rem'
            }}
          >
            © {new Date().getFullYear()} C AI S. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Typography 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.9rem',
                '&:hover': { color: '#ffffff' }
              }}
            >
              Privacy Policy
            </Typography>
            <Typography 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.9rem',
                '&:hover': { color: '#ffffff' }
              }}
            >
              Terms of Service
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}