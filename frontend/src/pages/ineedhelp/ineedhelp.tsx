import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {NeedButton} from './components/Button'

export const IneedHelp: React.FC = () => {

  return (
    <Grid container direction="column" justifyContent = "center">
            <NeedButton onClick={()=>{alert('clicked')}}> I Need Help </NeedButton>
            <NeedButton onClick={()=>{alert('clicked')}}> I Can Help </NeedButton>
            <div> I already have an account: </div>
            <Button variant="contained" size="large" onClick={()=>{alert('clicked')}}>Log in</Button>
    </Grid>
  );
};