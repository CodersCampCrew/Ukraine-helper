import * as Yup from 'yup';

import { Grid, Button, Link, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  FormInput,
  FormPaper,
  InvalidField,
  FormItem,
  LoadingSpinner
} from '../../../components';

import { UserContext } from '../../../providers/UserProvider';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../../../routes';

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is required')
      .min(6, 'Email must be at least 6 characters')
      .max(20, 'Email must not exceed 20 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userContext.state.user) {
      navigate(routes.home);
    }
  }, [userContext.state.user]);

  const submitForm: SubmitHandler<FormValues> = async (data) => {
    userContext.state.isLoading = true
    userContext.actions.login(data);
    userContext.state.isLoggedIn = true;
    userContext.state.isLoading = false
  };

  return (
    <Grid container direction="row" justifyContent="center">
      <Grid item>
        <Typography padding=".5em 0" sx={{ fontSize: '2rem' }}>
          Login
        </Typography>
      </Grid>
      <Grid item xs={11}>
        <FormPaper>
          <form onSubmit={handleSubmit(submitForm)}>
            <FormItem>
              <FormInput
                id="email"
                InputProps={{ disableUnderline: true }}
                label="Email"
                variant="filled"
                {...register('email')}
              />
              <InvalidField>{errors.email?.message}</InvalidField>
            </FormItem>
            <FormItem>
              <FormInput
                type="password"
                InputProps={{ disableUnderline: true }}
                id="password"
                label="Password"
                variant="filled"
                {...register('password')}
              />
              <InvalidField>{errors.password?.message}</InvalidField>
            </FormItem>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="center"
              padding="1rem"
            >
              <Link href="/register" underline="none" padding="1.5rem">
                If you don't have an account, please register
              </Link>
              <Link href="/forgot" underline="none">
                Forgot your password?
              </Link>
            </Grid>

            <Grid container justifyContent="space-between">
              <Button href='/' variant="outlined">Cancel</Button>
              <Button type="submit" variant="contained">
                Log in
              </Button>
              {userContext.state.isLoading && <LoadingSpinner/> }  
            </Grid>
          </form>
        </FormPaper>
      </Grid>
    </Grid>
  );
};
