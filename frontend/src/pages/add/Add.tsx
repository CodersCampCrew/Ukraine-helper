import { Grid } from '@mui/material';
import { AddForm } from './components/AddForm';

export const Add: React.FC = () => {
  return (
    <Grid container justifyContent="center">
      <AddForm />
    </Grid>
  );
};
