import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button, createTheme, Link, ThemeProvider } from '@mui/material';
import { IconButton } from '@mui/material';
import React, { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#ffffff'
    }
  }
});

const Navbar: React.FC = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();

  const userContext = useContext(UserContext);
  const isLogin: boolean = userContext.state.isLoggedIn;

  const logoutHandler = () => {
    userContext.actions.logout();
    navigate(routes.home)
  };


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static" sx={{ padding: '.5em' }}>
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <Button
                onClick={() => {
                  navigate(routes.home);
                }}
              >
                <Typography component="div" sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{
                      fontSize: 18,
                      color: '#3B7BDC',
                      fontWeight: 'bold'
                    }}
                  >
                    UKRAINE
                  </Typography>
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{
                      fontSize: 18,
                      color: '#FCDA30',
                      fontWeight: 'bold'
                    }}
                  >
                    HELPER
                  </Typography>
                </Typography>
              </Button>
            </Typography>
            {isLogin && (
              <Box>
                <Tooltip title="Open settings">
                  <IconButton
                    size="large"
                    color="secondary"
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                  >
                    <SettingsIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={logoutHandler}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                  <MenuItem  onClick={() => {
                    navigate(routes.add)
                  }}>
                    <Typography textAlign="center">Add an announcement</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )}
            {!isLogin && (
              <Link
                underline="none"
                sx={{ color: '#fff', cursor: 'pointer' }}
                onClick={() => {
                  navigate(routes.login);
                }}
              >
                Login
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
