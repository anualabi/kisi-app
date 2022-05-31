import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Spinner from './Spinner';
import { useGetGroupLocksQuery } from '../api/apiSlice';
import Lock from './Lock';
import ErrorMessage from './ErrorMessage';
import AddGroupLock from './AddGroupLock';

const GroupLocks = () => {
  const { groupId } = useParams() as { groupId: string };
  const { data: locks = [], isFetching, isSuccess, isError } = useGetGroupLocksQuery(groupId);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <Button
          variant="contained"
          size="small"
          sx={{ ml: 'auto', height: 60 }}
          onClick={handleOpen}
        >
          Add Locks
        </Button>
      </div>
      <Card sx={{ p: 1 }}>{content}</Card>

      {/* Add Group Lock Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <AddGroupLock groupLocks={locks} handleClose={handleClose} groupId={groupId} />
        </div>
      </Modal>
    </Container>
  );
};

export default GroupLocks;
