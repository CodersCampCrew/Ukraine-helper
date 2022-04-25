import {
  Grid,
  Button,
  Typography,
  inputAdornmentClasses,
  Select,
  MenuItem,
  InputLabel
} from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  FormInput,
  FormPaper,
  InvalidField,
  FormItem
} from '../../../components';

export const AddForm: React.FC = () => {
  return (
    <Grid container direction="row" justifyContent="center">
      <Grid item alignItems="center">
        <Typography padding=".5em 0" sx={{ fontSize: '2rem' }}>
          Add an ad!
        </Typography>
      </Grid>
      <Grid item padding=".5rem 0" xs={11}>
        <FormPaper>
          <form>
            <Select label="Type of service" value="type of service">
              <MenuItem value={'permamentStay'}>Permament Stay</MenuItem>
              <MenuItem value={'temporaryStay'}>Temporary Stay</MenuItem>
              <MenuItem value={'legalAssistance'}>Legal Assistance</MenuItem>
              <MenuItem value={'forKids'}>For kids</MenuItem>
              <MenuItem value={'medicalAssistance'}>
                Medical and psychological assistance
              </MenuItem>
              <MenuItem value={'electronic'}>Electronic</MenuItem>
            </Select>
            <Grid container justifyContent="space-between">
              <Button href="/" variant="outlined">
                Cancel
              </Button>
              <Button href="/" type="submit" variant="contained">
                Next
              </Button>
            </Grid>
          </form>
        </FormPaper>
      </Grid>
    </Grid>
  );
};
