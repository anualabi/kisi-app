import { useFormik } from 'formik';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { GroupLock } from '../types/grouplock';
import { useGetLocksQuery, useAddNewGroupLockMutation } from '../api/apiSlice';
import ErrorMessage from './ErrorMessage';

interface Props {
  groupLocks: GroupLock[];
  handleClose: () => void;
  groupId: string;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24
};

const AddGroupLock = ({ groupLocks, handleClose, groupId }: Props) => {
  const { data: locks = [] } = useGetLocksQuery();
  const [addNewGroupLock, { isLoading, isSuccess }] = useAddNewGroupLockMutation();

  const formik = useFormik({
    initialValues: { place: '', door: '' },
    // a required property that is not used.
    onSubmit: (values) => alert(JSON.stringify(values, null, 2))
  });

  const handleSubmit = async () => {
    if (canSave) {
      try {
        await addNewGroupLock({
          group_lock: {
            group_id: groupId,
            lock_id: formik.values.door
          }
        }).unwrap();
        isSuccess && handleClose();
      } catch (err) {
        <ErrorMessage message="Unable to create new group lock." />;
      }
    }
  };

  const canSave = [formik.values.place, formik.values.door].every(Boolean) && !isLoading;

  return (
    <Container maxWidth="md" sx={style}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight="bold">
          Add doors
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ my: 3 }}>
            <TextField
              id="=place"
              name="place"
              select
              label="Select place"
              value={formik.values.place}
              onChange={formik.handleChange}
              sx={{ width: '100%' }}
            >
              <MenuItem
                key={13233 || groupLocks[0].place.id}
                value={13233 || groupLocks[0].place.id}
              >
                {'Test Place' || groupLocks[0].place.name}
              </MenuItem>
            </TextField>
          </Box>
          <Box sx={{ my: 3 }}>
            <TextField
              id="door"
              name="door"
              select
              label="Select door"
              value={formik.values.door}
              onChange={formik.handleChange}
              sx={{ width: '100%' }}
            >
              {locks?.map((lock) => (
                <MenuItem key={lock.id} value={lock.id}>
                  {lock.name}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', justifyContent: 'end', my: 2 }}>
            <Button variant="text" sx={{ mr: 1 }} onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              disabled={!formik.values.place || !formik.values.door}
              sx={{ ml: 1 }}
            >
              Add
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default AddGroupLock;
