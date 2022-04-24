import { Grid } from '@mui/material';

export const Error404: React.FC = () => {
  return (
    <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center">
            <p>Error 404</p>
            <p>We Lost the page</p>
    </Grid>
  );
};