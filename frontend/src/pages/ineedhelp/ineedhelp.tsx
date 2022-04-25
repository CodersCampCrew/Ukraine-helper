import { Grid, Button } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import routes from '../../routes';
import { NeedButton } from './components/Button';

export const IneedHelp: React.FC = () => {
  const userContext = useContext(UserContext);
  const isLogin = userContext.state.isLoggedIn;

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
      
      {isLogin ? null : (
        <><div> I already have an account: </div> <Button
          variant="contained"
          size="large"
          onClick={() => {
            navigate(routes.login);
          }}
        >
          Log in
        </Button>
        </>
       
      )}
    </Grid>
  );
};
