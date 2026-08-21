import { Tabs, Tab, Box, AppBar, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function CategoryNav() {
  const location = useLocation();
  
  // Set the active tab based on the current URL path.
  // If the path isn't recognized, fallback to false or the home path.
  const currentTab = ['/', '/about', '/contact', '/projects', '/fitness'].includes(location.pathname) 
    ? location.pathname 
    : '/';

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
        </Typography>
        <Box>
          <Tabs 
            value={currentTab} 
            indicatorColor="primary" 
            textColor="primary"
          >
            <Tab label="Home" value="/" component={Link} to="/" />
            <Tab label="About" value="/about" component={Link} to="/about" />
            <Tab label="Contact" value="/contact" component={Link} to="/contact" />
            <Tab label="Fitness" value="/fitness" component={Link} to="/fitness" />
            <Tab label="Projects" value="/projects" component={Link} to="/projects" />
            
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default CategoryNav;
