import Head from 'next/head'
import { Box, Container, Typography, Tabs, Tab } from '@mui/material'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Footer from '../components/Footer'


export default function Home() {
  const [activeTab, setActiveTab] = useState(0)


  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }


  return (
    <>
      <Head>
        <title>C AI S - Custom AI Solutions for Construction</title>
        <meta name="description" content="Revolutionizing construction with bespoke artificial intelligence innovations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Box sx={{ 
        backgroundColor: '#0a0a0a',
        minHeight: '100vh',
        color: '#ffffff'
      }}>
        <Navbar />
        <Hero />
        <Container maxWidth="lg">
          <Box sx={{ 
            my: 12,
            borderBottom: 1,
            borderColor: 'rgba(255, 255, 255, 0.1)'
          }}>
            <Tabs 
              value={activeTab} 
              onChange={handleTabChange}
              sx={{
                '& .MuiTab-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1rem',
                  fontWeight: 400,
                  textTransform: 'none',
                  '&.Mui-selected': {
                    color: '#ffffff',
                  }
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#ffffff',
                }
              }}
            >
              <Tab label="AI Automation" />
              <Tab label="Integrations" />
              <Tab label="Custom Tools" />
            </Tabs>
          </Box>
          <Services activeTab={activeTab} />
        </Container>
        <Footer />
      </Box>
    </>
  )
}