import { Box, Typography, Grid } from '@mui/material'


const services = [
  {
    title: 'AI Automation',
    description: 'Streamline construction workflows with intelligent automation systems tailored to your business needs.',
    items: ['Project Management AI', 'Resource Allocation', 'Risk Assessment']
  },
  {
    title: 'Integrations',
    description: 'Seamlessly connect your existing systems with our AI solutions for enhanced efficiency.',
    items: ['ERP Integration', 'CAD Software', 'Project Management Tools']
  },
  {
    title: 'Custom Tools',
    description: 'Bespoke AI tools designed specifically for your construction business challenges.',
    items: ['Predictive Analytics', 'Safety Monitoring', 'Quality Control']
  }
]


export default function Services({ activeTab }: { activeTab: number }) {
  const currentService = services[activeTab]


  return (
    <Box sx={{ py: 8 }}>
      <Typography 
        variant="h2"
        sx={{ 
          fontSize: '2.5rem',
          fontWeight: 300,
          mb: 4 
        }}
      >
        {currentService.title}
      </Typography>
      <Typography 
        sx={{ 
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '1.2rem',
          mb: 6,
          maxWidth: '600px'
        }}
      >
        {currentService.description}
      </Typography>
      <Grid container spacing={4}>
        {currentService.items.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box 
              sx={{
                p: 4,
                backgroundColor: '#1a1a1a',
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#222222',
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <Typography sx={{ fontSize: '1.2rem', fontWeight: 400 }}>
                {item}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}