import * as Yup from 'yup';

import { Grid, Button, Link, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  FormInput,
  FormPaper,
  InvalidField,
  FormItem
} from '../../../components';

import { UserContext } from '../../../providers/UserProvider';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../../../routes';

type FormValues = {
  type: string;
  for: string;
  to: string;
  time: string;
  desc: string;
};

export const formTypeOne = (type: string) => {
  const schema = Yup.object().shape({
    type: Yup.string().required(''),
    for: Yup.number(),
    to: Yup.string().required('Write the city you are aiming'),
    time: Yup.string().required('Whan do you want to service'),
    desc: Yup.string().required('Type a description')
  });
};
