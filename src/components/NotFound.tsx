import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NotFound = () => {
  return (
    <Container maxWidth="xs" sx={{ textAlign: 'center' }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Page not found 😔
      </Typography>
      <Link to="/">
        <Button variant="contained">See All Groups</Button>
      </Link>
    </Container>
  );
};

export default NotFound;
