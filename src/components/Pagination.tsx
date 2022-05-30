import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
  pagination: string | null | undefined;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

export default function (props: Props) {
  const perPage = 10;
  const total = Number(props.pagination?.slice().split('/').pop()) || perPage;
  const start = Number(props.pagination?.slice().split('-')[0]);
  const end = Number(props.pagination?.slice().split('/')[0].split('-')[1]);
  const pages = Math.ceil(total / perPage);
  const current = start / perPage + 1;
  const hasNextPage = total > end;

  return (
    <Container sx={{ my: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" disabled={current === 1} onClick={props.handlePreviousPage}>
          Previous
        </Button>
        <Typography>
          Page {current} of {pages}
        </Typography>
        <Button variant="contained" disabled={!hasNextPage} onClick={props.handleNextPage}>
          Next
        </Button>
      </Box>
    </Container>
  );
}
