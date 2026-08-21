import { Container, Typography, Box, Grid, Card, CardContent, Avatar, Chip, Stack } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function About() {
  const skills = ["OpenWRT", "C++", "C", "Python", "Scala", "Linux", "Git"];
  const instruments = ["Multimeter", "Oscilloscope"];

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        
        {/* Profile Picture Column */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              alt="Yash"
              src="" // Replace with image
              sx={{ width: 200, height: 200, boxShadow: 3 }}
            />
          </Box>
        </Grid>

        {/* Core Bio Column */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
            Hi, I'm Yash 👋
          </Typography>
          <Typography variant="h6" color="primary" gutterBottom sx={{ mb: 2 }}>
            Embedded Software Engineer
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            I am a Computer Engineering graduate from the University at Buffalo with a passion for 
            low-level hardware-software co-design. I specialize in developing robust embedded solutions, 
            working deeply with network operating systems like OpenWRT, and optimizing performance in C and C++.
          </Typography>
        </Grid>

        {/* Highlights & Skills Grid */}
        <Grid size={{ xs: 12 }} sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            
            {/* Quick Facts Card */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Card variant="outlined" sx={{ height: '100%', borderRadius: 2 }}>
                <CardContent sx={{ display: 'flex', gap: 2 }}>
                  <WorkspacePremiumIcon color="primary" sx={{ fontSize: 32 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>Background</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Based in Germantown, Maryland. B.S. in Computer Engineering and Mathematics minor from the University at Buffalo
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Core Stack Card */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Card variant="outlined" sx={{ height: '100%', borderRadius: 2 }}>
                <CardContent sx={{ display: 'flex', gap: 2 }}>
                  <CodeIcon color="primary" sx={{ fontSize: 32 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>Current Focus</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Building.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Skills Section */}
        <Grid size={{ xs: 12 }} sx={{ mt: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: "bold" }}>
            Tooling
          </Typography>
          {/* Use spacing={1} for spacing chips, flexWrap goes inside sx */}
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', mb: 4 }}>
            {skills.map((skill) => (
              <Chip 
                key={skill} 
                label={skill} 
                color="primary" 
                variant="outlined" 
                sx={{ fontSize: '0.9rem', py: 0.5 }}
              />
            ))}
          </Stack>

          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: "bold" }}>
            Instrumentation
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
            {instruments.map((instrument) => (
              <Chip 
                key={instrument} 
                label={instrument} 
                color="primary" 
                variant="outlined" 
                sx={{ fontSize: '0.9rem', py: 0.5 }}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}