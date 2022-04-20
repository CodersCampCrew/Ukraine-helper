import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import {  createTheme, ThemeProvider } from '@mui/material';
import { IconButton } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#ffffff'
    }
  }
})

const Navbar: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
    <Box  sx={{ flexGrow: 2,  }}>
      <AppBar position="static" sx={{padding: '.5em'}}>
        <Toolbar>
          <Typography sx={{flexGrow: 1}}>
            <Typography variant="h6" component="div" sx={{  fontSize: 18, color: '#3B7BDC', fontWeight: "bold" }}>
            UKRAINE 
          </Typography>
          <Typography variant="h6" component="div" sx={{ fontSize: 18, color: '#FCDA30', fontWeight: "bold"}}>
             HELPER
          </Typography>
          </Typography>
          
          <IconButton
          size='large'
          color='secondary'
          >
            <SettingsIcon fontSize='large'/>
          </IconButton>
           
        </Toolbar>
      </AppBar>
    </Box></ThemeProvider>
  );
}

export default Navbar;