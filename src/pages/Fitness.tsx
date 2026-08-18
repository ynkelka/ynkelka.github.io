import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import hevyImg from "../assets/hevy.png"
import stravaImg from "../assets/strava.png"

// Define the shape of your fitness network data
interface FitnessNetwork {
  title: string;
  description: string;
  qrImage: string;
  profileUrl: string;
}

const fitnessData: FitnessNetwork[] = [
    {
    title: 'Hevy',
    description: 'Add me on Hevy',
    qrImage: hevyImg,
    profileUrl: 'https://hevy.com/user/ykelkar',
  },
  {
    title: 'Strava',
    description: 'Add me on Strava',
    qrImage: stravaImg,
    profileUrl: 'https://strava.app.link/MdRWtracF5b',
  },
  
];

export default function Fitness(): React.JSX.Element {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
        {fitnessData.map((item: FitnessNetwork) => (
          <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ maxWidth: 345, mx: 'auto', textAlign: 'center', p: 2 }}>
              <CardMedia
                component="img"
                image={item.qrImage}
                alt={`${item.title}`}
                sx={{ height: 200, objectFit: 'contain', mt: 2 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {item.description}
                </Typography>
                <Button 
                  size="small" 
                  variant="contained" 
                  href={item.profileUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Profile
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}