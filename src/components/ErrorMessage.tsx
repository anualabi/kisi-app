import Typography from '@mui/material/Typography';

type Props = { message: string };

const ErrorMessage = (props: Props) => {
  return (
    <Typography color="red" textAlign="center">
      {props.message}
    </Typography>
  );
};

export default ErrorMessage;
