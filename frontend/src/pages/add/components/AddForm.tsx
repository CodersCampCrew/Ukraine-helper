import * as Yup from 'yup';
 
import { Grid, Button, Select, SelectChangeEvent, MenuItem, Typography, inputAdornmentClasses } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
 FormInput,
 FormPaper,
 InvalidField,
 FormItem
} from '../../../components';

 
import { UserContext } from '../../../providers/UserProvider';
import { useContext, useEffect, useState} from 'react';
import userService from '../../../services/userService';
import { useNavigate } from 'react-router-dom';
import routes from '../../../routes';
 
type FormValues = {
  category: string
  for: string;
  closeTo: string;
  availableFrom: string;
  avaible: Date;
  desc: string;
};

export const AddForm: React.FC = () => {
  const schema = Yup.object().shape({
    for: Yup.string()
      .required('For is required'),
    closeTo: Yup.string()
      .required('Close To is required'),
    AvaibleFrom: Yup.string()
      .required('Avaible From is required'),
    desc: Yup.string()
      .required('description is required'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const userContext = useContext(UserContext)

  const submitForm: SubmitHandler<FormValues> = async (data) => {
    const response = userService.register(data);
  };
 
 
 return (
   <Grid container direction="row" justifyContent="center">
     <Grid item>
       <Typography padding=".5em 0" sx={{ fontSize: '2rem' }}>
         Category
       </Typography>
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
              <Grid item padding='.5rem 0' xs={11} >
                <FormItem>
                    <Select id="category" label="category" {...register('category')}>
                    <MenuItem value={'transport'}>Transport</MenuItem>
                    <MenuItem value={'permanentStay'}>Permanent Stay</MenuItem>
                    <MenuItem value={'temporaryStay'}>Temporary Stay</MenuItem>
                    <MenuItem value={'sleepover'}>Sleep over</MenuItem>
                    <MenuItem value={'forkids'}>For Kids</MenuItem>
                    <MenuItem value={'electronic'}>Electronic</MenuItem>
                    <MenuItem value={'legalAssisntace'}>Legal Assistance</MenuItem>
                    <MenuItem value={'medicalAssistance'}>Medical Assistance</MenuItem>
                    </Select>
                <FormInput
                    id="input"
                    InputProps={{ disableUnderline: true }}
                    label="input"
                    variant="filled"
                  />
                </FormItem>
              </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
              <Button href='/' variant="outlined">Cancel</Button>
              <Button href='/confirm' type="submit" variant="contained">
                Next
              </Button>
            </Grid>
          </form>
        </FormPaper>
     </Grid>
   </Grid>
 );
}
;