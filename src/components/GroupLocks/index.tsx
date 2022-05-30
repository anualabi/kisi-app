import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useGetGroupLocksQuery } from '../../api/apiSlice';
import Lock from '../Lock';

const GroupLocks = () => {
  const { groupId } = useParams() as { groupId: string };
  const { data: locks, isFetching, isSuccess, isError } = useGetGroupLocksQuery(groupId);

  let content;

  if (isFetching) {
    content = <CircularProgress />;
  } else if (isSuccess) {
    content = locks.map((lock) => <Lock key={lock.id} lock={lock} />);
  } else if (isError) {
    content = <Typography color="red">Group Locks not found.</Typography>;
  }

  return (
    <Container>
      {isSuccess && <h1>Locks for {locks[0].group.name} group</h1>}
      <Card>{content}</Card>
    </Container>
  );
};

export default GroupLocks;
