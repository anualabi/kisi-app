import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useGetGroupsQuery } from '../../api/apiSlice';
import Group from '../Group';

const Groups = () => {
  const { data: groups = [], isLoading, isSuccess, isError } = useGetGroupsQuery();

  let content;

  if (isLoading) {
    content = <CircularProgress />;
  } else if (isSuccess) {
    content = groups.map((group) => <Group key={group.id} group={group} />);
  } else if (isError) {
    content = <Typography color="red">Groups not found.</Typography>;
  }

  return (
    <Container>
      <h1>Groups</h1>
      <Card>{content}</Card>
    </Container>
  );
};

export default Groups;
