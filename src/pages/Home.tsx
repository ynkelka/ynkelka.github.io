//import React from 'react';
import { 
  Container, Box, Typography, Grid, 
  Stack, useTheme, alpha 
} from '@mui/material';

export default function Home() {
  const theme = useTheme();

  return (
    <Box sx={{ 
      minHeight: 'calc(100vh - 64px)', 
      display: 'flex', 
      alignItems: 'center',
      bgcolor: 'background.default',
      position: 'relative'
    }}>
      {/* Muted ambient backdrop light */}
      <Box sx={{
        position: 'absolute',
        top: '20%',
        right: '5%',
        width: '40vw',
        height: '40vw',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${alpha(theme.palette.text.secondary, 0.03)} 0%, transparent 70%)`,
        filter: 'blur(80px)',
        zIndex: 0
      }} />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 14 } }}>
        <Grid container spacing={4}>
          <Grid sx={{
            xs: 12}} >
            <Stack spacing={4}>
              
              {/* Minimalist Subheading */}
              <Typography 
                variant="subtitle2" 
                color="text.secondary" 
                sx={{ fontWeight: "500", letterSpacing: '1.5px', textTransform: 'uppercase' }}
              >
                Yash Kelkar &mdash; Embedded Software Engineer
              </Typography>
              
              {/* Refined Headline */}
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 500,
                  letterSpacing: '-1.5px',
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  lineHeight: 1.15,
                  color: 'text.primary'
                }}
              >
                Architecting custom operating systems for embedded hardware.
              </Typography>

              {/* Restrained, Accurate Technical Copy */}
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  fontSize: { xs: '1.1rem', md: '1.2rem' },
                  lineHeight: 1.7, 
                  maxWidth: '640px',
                  fontWeight: 400
                }}
              >
                I specialize in bringing up Linux on custom hardware, writing user-space applications, and networking.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
