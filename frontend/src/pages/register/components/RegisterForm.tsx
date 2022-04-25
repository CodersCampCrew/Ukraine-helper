import * as Yup from 'yup';

import { Grid, Button, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  FormInput,
  FormPaper,
  InvalidField,
  FormItem
} from '../../../components';
import userService from '../../../services/userService';
import { useContext } from 'react';
import { UserContext } from '../../../providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import routes from '../../../routes'

type FormValues = {
  firstName: string;
  lastName: string;
  city: string;
  email: string;
  areaCode: string;
  phone: string;
  password: string;
};

export const RegisterForm: React.FC = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string()
      .required('First name is required')
      .min(3, 'First name must be at least 3 characters')
      .max(20, 'First name must not exceed 20 characters'),
    lastName: Yup.string()
      .required('Surname is required')
      .min(3, 'Surname must be at least 3 characters')
      .max(20, 'Surname must not exceed 20 characters'),
    city: Yup.string()
      .required('City is required')
      .min(3, 'City name must be at least 3 characters')
      .max(20, 'City must not exceed 20 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is required')
      .min(6, 'Email must be at least 6 characters')
      .max(50, 'Email must not exceed 20 characters'),
    areaCode: Yup.string()
      .required('Area code is required')
      .matches(
        /\+[0-9]{2,3}/,
        'Areac code must starts with +, and max 3 digits'
      )
      .min(2, 'Area code must be at least 2 characters')
      .max(4, 'Area code must not exceed 4 characters'),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(/^[0-9]+$/, 'Only digits')
      .min(9, 'Phone number must be at least 9 characters')
      .max(9, 'Phone number must not exceed 9 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters')
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const submitForm: SubmitHandler<FormValues> = async (data) => {
    userContext.state.isLoading = true;
    const response = await userService.register(data);
    console.log(response);
    userContext.state.isLoading = false;
  };

  return (
    <Grid container direction="row" justifyContent="center">
      <Grid item alignItems="center">
        <Typography padding=".5em 0" sx={{ fontSize: '2rem' }}>
          Registration
        </Typography>
      </Grid>
      <Grid item padding=".5rem 0" xs={11}>
        <FormPaper>
          <form onSubmit={handleSubmit(submitForm)}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              sx={{ margin: 'auto 0' }}
            >
              <Grid item padding=".5rem 0" xs={5} sm={5} md={4}>
                <FormItem>
                  <FormInput
                    id="firstName"
                    InputProps={{ disableUnderline: true }}
                    label="First name"
                    variant="filled"
                    {...register('firstName')}
                  />
                  <InvalidField>{errors.firstName?.message}</InvalidField>
                </FormItem>
              </Grid>
              <Grid item padding=".5rem 0" xs={5} sm={5} md={4}>
                <FormItem>
                  <FormInput
                    id="lastName"
                    InputProps={{ disableUnderline: true }}
                    label="Last name"
                    variant="filled"
                    {...register('lastName')}
                  />
                  <InvalidField>{errors.lastName?.message}</InvalidField>
                </FormItem>
              </Grid>
              <Grid item padding=".5rem 0" xs={12} sm={5} md={4}>
                <FormItem>
                  <FormInput
                    id="city"
                    InputProps={{ disableUnderline: true }}
                    label="City"
                    variant="filled"
                    {...register('city')}
                  />
                  <InvalidField>{errors.city?.message}</InvalidField>
                </FormItem>
              </Grid>
              <Grid item padding=".5rem 0" xs={12} sm={5} md={4}>
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
              </Grid>
              <Grid item padding=".5rem 0" xs={5} sm={5} md={4}>
                <FormItem>
                  <FormInput
                    id="areaCode"
                    InputProps={{ disableUnderline: true }}
                    label="Area Code"
                    variant="filled"
                    {...register('areaCode')}
                  />
                  <InvalidField>{errors.areaCode?.message}</InvalidField>
                </FormItem>
              </Grid>
              <Grid item padding=".5rem 0" xs={6} sm={5} md={4}>
                <FormItem>
                  <FormInput
                    id="phone"
                    InputProps={{ disableUnderline: true }}
                    label="Phone number"
                    variant="filled"
                    {...register('phone')}
                  />
                  <InvalidField>{errors.phone?.message}</InvalidField>
                </FormItem>
              </Grid>
              <Grid item padding=".5rem 0" xs={12} sm={5} md={4}>
                <FormItem>
                  <FormInput
                    id="password"
                    InputProps={{ disableUnderline: true }}
                    label="Password"
                    variant="filled"
                    {...register('password')}
                  />
                  <InvalidField>{errors.password?.message}</InvalidField>
                </FormItem>
              </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
              <Button onClick={() => {
                navigate(routes.home)
              }} variant="outlined">
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                Next
              </Button>
            </Grid>
          </form>
        </FormPaper>
      </Grid>
    </Grid>
  );
};
