import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Spinner from './Spinner';
import { useGetGroupsQuery } from '../api/apiSlice';
import Group from './Group';
import ErrorMessage from './ErrorMessage';

const Groups = () => {
  const { data: groups = [], isLoading, isSuccess, isError } = useGetGroupsQuery();

  let content;

  if (isLoading) {
    content = <Spinner />;
  } else if (isSuccess) {
    content = groups.length ? (
      groups.map((group) => <Group key={group.id} group={group} />)
    ) : (
      <Typography textAlign="center">There are currently no groups.</Typography>
    );
  } else if (isError) {
    content = <ErrorMessage message="Groups not found." />;
  }

  return (
    <Container>
      <h1>Groups</h1>
      <Card>{content}</Card>
    </Container>
  );
};

export default Groups;
