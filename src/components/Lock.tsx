import React from 'react';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { GroupLock } from '../types/grouplock';
import { useRemoveGroupLockMutation } from '../api/apiSlice';
import ErrorMessage from './ErrorMessage';

interface Props {
  lock: GroupLock;
}

const Lock: React.FC<Props> = ({ lock }) => {
  const [removeGroupLock] = useRemoveGroupLockMutation();

  const handleDelete = async () => {
    try {
      await removeGroupLock(lock.id).unwrap();
    } catch (err) {
      <ErrorMessage message="Unable to remove group lock." />;
    }
  };

  return (
    <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Typography variant="h6">{lock.lock.name}</Typography>
          <Typography variant="body2">
            {lock.place.name} - {lock.lock.description || 'No description'}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Box>
            <LocationOnOutlinedIcon />
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box>
            <PhoneIphoneOutlinedIcon />
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box onClick={handleDelete} style={{ cursor: 'pointer' }}>
            <DeleteIcon />
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default Lock;
