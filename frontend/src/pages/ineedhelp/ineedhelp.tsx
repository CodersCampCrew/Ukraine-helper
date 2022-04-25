import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes';
import { NeedButton } from './components/Button';

export const IneedHelp: React.FC = () => {
  let navigate = useNavigate();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <NeedButton
        onClick={() => {
          navigate(routes.category);
        }}
      >
        {' '}
        I Need Help{' '}
      </NeedButton>
      <NeedButton
        onClick={() => {
          navigate(routes.register);
        }}
      >
        {' '}
        I Can Help{' '}
      </NeedButton>
      <div> I already have an account: </div>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          navigate(routes.login);
        }}
      >
        Log in
      </Button>
    </Grid>
  );
};
