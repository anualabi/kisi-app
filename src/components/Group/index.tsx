import React from 'react';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import AodOutlinedIcon from '@mui/icons-material/AodOutlined';
import { GroupPayload } from '../../models/group';
import { StyledGrid } from './styles';

interface Props {
  group: GroupPayload;
}

const Group: React.FC<Props> = ({ group }) => {
  return (
    <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography>{group.name}</Typography>
        </Grid>
        <StyledGrid item xs={1}>
          <Box>
            <SensorDoorOutlinedIcon />
          </Box>
          <Box>{group.locks_count}</Box>
        </StyledGrid>
        <StyledGrid item xs={1}>
          <Box>
            <PeopleOutlinedIcon />
          </Box>
          <Box>{group.members_count}</Box>
        </StyledGrid>
        <StyledGrid item xs={1}>
          <Box>
            <AccessTimeOutlinedIcon />
          </Box>
        </StyledGrid>
        <StyledGrid item xs={1}>
          <Box>
            <LocationOnOutlinedIcon />
          </Box>
        </StyledGrid>
        <StyledGrid item xs={1}>
          <Box>
            <PhoneIphoneOutlinedIcon />
          </Box>
        </StyledGrid>
        <StyledGrid item xs={1}>
          <Box>
            <AodOutlinedIcon />
          </Box>
        </StyledGrid>
      </Grid>
    </CardContent>
  );
};

export default Group;
