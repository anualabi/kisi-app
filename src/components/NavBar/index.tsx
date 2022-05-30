import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NavBar = () => {
  return (
    <Box sx={{ mb: 10 }}>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h5" component="h1" fontWeight="bold">
              kisi
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
