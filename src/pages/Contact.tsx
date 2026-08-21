import { Container, Typography, Box, Button, Stack, Card, CardContent } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  const email = "yashnkelkar@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/yash-kelkar-53a168144/";

  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
      <Card elevation={3} sx={{ borderRadius: 3, p: 2 }}>
        <CardContent>
          <Box 
          sx={{textAlign: 'center', mb: 4}}>
            <Typography 
            sx={{fontWeight: "bold"}}
            variant="h4" component="h1" gutterBottom>
              Let's Connect
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Feel free to reach out through any of the platforms below.
            </Typography>
          </Box>

          <Stack spacing={2}>
            <Button
              variant="contained"
              size="large"
              startIcon={<MailIcon />}
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: '#db4437',
                '&:hover': { backgroundColor: '#c53929' },
                textTransform: 'none',
                fontSize: '1.1rem',
                py: 1.5,
                borderRadius: 2
              }}
            >
              Email Me (Gmail)
            </Button>

            <Button
              variant="contained"
              size="large"
              startIcon={<LinkedInIcon />}
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: '#0077b5',
                '&:hover': { backgroundColor: '#006297' },
                textTransform: 'none',
                fontSize: '1.1rem',
                py: 1.5,
                borderRadius: 2
              }}
            >
              Connect on LinkedIn
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}