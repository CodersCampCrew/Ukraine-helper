import { RegisterForm } from './components/RegisterForm';
import { Grid } from '@mui/material';

export const Register: React.FC = () => {
  return (
    <Grid container justifyContent="center">
      <RegisterForm />
    </Grid>
  );
};
