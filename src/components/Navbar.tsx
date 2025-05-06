import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'


export default function Navbar() {
  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        backgroundColor: '#0a0a0a',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 500,
            letterSpacing: 2,
            color: '#ffffff'
          }}
        >
          C AI S
        </Typography>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Button sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Services</Button>
          <Button sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>About</Button>
          <Button sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}