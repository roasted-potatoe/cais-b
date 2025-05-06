import { Box, Typography, Button } from '@mui/material'


export default function Hero() {
  return (
    <Box 
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)'
      }}
    >
      <Typography 
        variant="h1"
        sx={{
          fontSize: { xs: '2.5rem', md: '4rem' },
          fontWeight: 300,
          mb: 4,
          maxWidth: '800px'
        }}
      >
        Revolutionizing construction with bespoke artificial intelligence innovations
      </Typography>
      <Button 
        variant="outlined"
        sx={{
          color: '#ffffff',
          borderColor: 'rgba(255, 255, 255, 0.3)',
          borderRadius: 0,
          padding: '12px 24px',
          textTransform: 'none',
          fontSize: '1rem',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: '#ffffff'
          }
        }}
      >
        Discover our solutions
      </Button>
    </Box>
  )
}