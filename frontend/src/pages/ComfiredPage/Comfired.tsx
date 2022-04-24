import { useNavigate } from 'react-router-dom';
import { Grid, Button } from '@mui/material';
import { ConfirmedDiv } from './components/ConfirmedDiv';
import routes from '../../routes';

export const Confirmed: React.FC = () => {
let navigate = useNavigate();
  return (
    <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center">
            <ConfirmedDiv>Your email address has been confirmed</ConfirmedDiv>
            <Button variant="contained" size="large" onClick={()=>{navigate(routes.login)}}>Log in</Button>
    </Grid>
  );
};