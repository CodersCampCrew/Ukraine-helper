import { Grid } from '@mui/material';
import { ConfirmDiv } from './components /ConfirmDiv';

export const Confirm: React.FC = () => {
  return (
    <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center">
            <p>Registration</p>
            <ConfirmDiv>Confirm your email address</ConfirmDiv>
    </Grid>
  );
};