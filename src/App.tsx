import { Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import CategoryNav from './components/CategoryNav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Fitness from './pages/Fitness';

function App() {
  return (
    <div>
      {/* MUI Top Navigation Bar */}
      <CategoryNav /> 
      
      {/* MUI Layout Container */}
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/fitness" element={<Fitness />} />
          </Routes>
        </Box>
      </Container>
    </div>
  )
}

export default App
