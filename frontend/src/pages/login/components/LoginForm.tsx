import * as Yup from 'yup';

import { Grid, Button, Link } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  FormInput,
  FormPaper,
  InvalidField,
  FormItem
} from '../../../components';
import userService from '../../../services/userService';

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

  const submitForm: SubmitHandler<FormValues> = async (data) => {
    const response = userService.login(data);
  };

  return (
    <Grid container direction="row" justifyContent="center">
      <Grid item xs={2}>
        <p>Login</p>
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
            <Link href="/forgot">Forgot your password?</Link>
            <Grid container justifyContent="space-between">
              <Button variant="outlined">Cancel</Button>
              <Button type="submit" variant="contained">
                Log in
              </Button>
            </Grid>
          </form>
        </FormPaper>
      </Grid>
    </Grid>
  );
};
