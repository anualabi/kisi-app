import { useState } from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Spinner from './Spinner';
import { useGetGroupsQuery } from '../api/apiSlice';
import Group from './Group';
import ErrorMessage from './ErrorMessage';
import Pagination from './Pagination';

const Groups = () => {
  const [offset, setOffset] = useState(0);
  const { data, isLoading, isSuccess, isError } = useGetGroupsQuery(offset);
  const groups = data?.apiResponse;
  const pagination = data?.pagination;

  const onHandleNextPage = () => setOffset(offset + 10);
  const onHandlePreviousPage = () => setOffset(offset - 10);

  let content;

  if (isLoading) {
    content = <Spinner />;
  } else if (isSuccess) {
    content = groups?.length ? (
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
      <Card>
        <Box>{content}</Box>
        <Pagination
          pagination={pagination}
          handleNextPage={onHandleNextPage}
          handlePreviousPage={onHandlePreviousPage}
        />
      </Card>
    </Container>
  );
};

export default Groups;
