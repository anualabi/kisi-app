import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Spinner from './Spinner';
import { useGetGroupLocksQuery } from '../api/apiSlice';
import Lock from './Lock';
import ErrorMessage from './ErrorMessage';

const GroupLocks = () => {
  const { groupId } = useParams() as { groupId: string };
  const { data: locks, isFetching, isSuccess, isError } = useGetGroupLocksQuery(groupId);

  let content;

  if (isFetching) {
    content = <Spinner />;
  } else if (isSuccess) {
    content = locks.length ? (
      locks.map((lock) => <Lock key={lock.id} lock={lock} />)
    ) : (
      <Typography textAlign="center">This group has no locks.</Typography>
    );
  } else if (isError) {
    content = <ErrorMessage message="Group Locks not found." />;
  }

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1>Group Locks</h1>
        <Button variant="contained" size="small" sx={{ ml: 'auto', height: 60 }}>
          Add Locks
        </Button>
      </div>
      <Card sx={{ p: 1 }}>{content}</Card>
    </Container>
  );
};

export default GroupLocks;
