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
import { useHttpClient } from '../../../hooks/httpHook';

type FormValues = {
  firstName: string;
  surname: string;
  city: string;
  email: string;
  areaCode: string;
  phoneNumber: string;
  password: string;
};

export const RegisterForm: React.FC = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string()
      .required('First name is required')
      .min(3, 'First name must be at least 3 characters')
      .max(20, 'First name must not exceed 20 characters'),
    surname: Yup.string()
      .required('Surname is required')
      .min(3, 'Surname must be at least 3 characters')
      .max(20, 'Surname must not exceed 20 characters'),
    city: Yup.string()
      .required('Surname is required')
      .min(3, 'Surname must be at least 3 characters')
      .max(20, 'Surname must not exceed 20 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is required')
      .min(6, 'Email must be at least 6 characters')
      .max(20, 'Email must not exceed 20 characters'),
    areaCode: Yup.string()
      .required('Area code is required')
      .matches(
        /\+[0-9]{2,3}/,
        'Areac code must starts with +, and max 3 digits'
      )
      .min(2, 'Area code must be at least 2 characters')
      .max(4, 'Area code must not exceed 4 characters'),
    phoneNumber: Yup.string()
      .required('Phone number is required')
      .matches(/^[0-9]+$/, 'Only digits')
      .min(7, 'House number must be at least 7 characters')
      .max(9, 'House number must not exceed 9 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters')
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const { sendRequest } = useHttpClient();

  const submitForm: SubmitHandler<FormValues> = async (data) => {
    const url = `http://localhost:3000/register`;
    const response = await sendRequest(url, 'POST', JSON.stringify(data), {
      'Content-Type': 'application/json'
    });
  };

  return (
    <Grid container direction="row" justifyContent="center">
      <Grid item xs={2}>
        <p>Registration</p>
      </Grid>
      <Grid item xs={11}>
        <FormPaper>
          <form onSubmit={handleSubmit(submitForm)}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              sx={{ margin: 'auto 0' }}
            >
              <Grid item xs={5} sm={5} md={4}>
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
              <Grid item xs={5} sm={5} md={4}>
                <FormItem>
                  <FormInput
                    id="surname"
                    InputProps={{ disableUnderline: true }}
                    label="Surname"
                    variant="filled"
                    {...register('surname')}
                  />
                  <InvalidField>{errors.surname?.message}</InvalidField>
                </FormItem>
              </Grid>
              <Grid item xs={12} sm={5} md={4}>
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
              <Grid item xs={12} sm={5} md={4}>
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
              <Grid item xs={5} sm={5} md={4}>
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
              <Grid item xs={6} sm={5} md={4}>
                <FormItem>
                  <FormInput
                    id="phoneNumber"
                    InputProps={{ disableUnderline: true }}
                    label="Phone number"
                    variant="filled"
                    {...register('phoneNumber')}
                  />
                  <InvalidField>{errors.phoneNumber?.message}</InvalidField>
                </FormItem>
              </Grid>
              <Grid item xs={12} sm={5} md={4}>
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
              <Button variant="outlined">Cancel</Button>
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
