import React from 'react';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import { GroupLock } from '../types/grouplock';

interface Props {
  lock: GroupLock;
}

const Lock: React.FC<Props> = ({ lock }) => {
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
        <Grid item xs={1}></Grid>
      </Grid>
    </CardContent>
  );
};

export default Lock;
