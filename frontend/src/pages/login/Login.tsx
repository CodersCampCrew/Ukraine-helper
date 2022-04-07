import { LoginForm } from './components/LoginForm';
import { Grid, Button } from '@mui/material';
import { Facebook, Twitter, Google } from '@mui/icons-material';

import styles from './Login.module.scss';

export const Login: React.FC = () => {
  return (
    <Grid container justifyContent="center">
      <LoginForm />
      <Grid item xs={8}>
        <p className={styles.loginAlternativeText}>
          <span>or</span>
        </p>
      </Grid>
      <Grid item xs={11} m={1}>
        <Button
          className={styles.loginButton}
          variant="contained"
          startIcon={<Google />}
        >
          <span>Login with Google</span>
        </Button>
      </Grid>
      <Grid item xs={11} m={1}>
        <Button
          className={styles.loginButton}
          variant="contained"
          startIcon={<Twitter />}
        >
          <span>Login with Twitter</span>
        </Button>
      </Grid>
      <Grid item xs={11} m={1}>
        <Button
          className={styles.loginButton}
          variant="contained"
          startIcon={<Facebook />}
        >
          <span>Login with Facebook</span>
        </Button>
      </Grid>
    </Grid>
  );
};
