import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NavBar = () => {
  return (
    <Box sx={{ mb: 10 }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" component="h1" fontWeight="bold">
            <Link to="/" style={{ color: 'white' }}>
              kisi
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
