import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { signOut } from 'firebase/auth';
import { CustomLink } from '../CustomComponents/CustomLink.styled';
import { auth } from '../../firebase';
import { useAppDispatch } from '../../store/hooks';
import {
  authFetching,
  authFetchingError,
  authFetchingSucces,
} from '../../store/reducers/authReducer';

const pages = [{ name: 'News', path: '/news' }];

function AppMenu() {
  const dispatch = useAppDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const emptyUser = {
    accessToken: '',
    email: '',
    auth: {},
    displayName: '',
    emailVerified: false,
    isAnonymous: false,
    metadata: {},
    phoneNumber: '',
    photoURL: '',
    proactiveRefresh: {},
    providerData: [],
    providerId: '',
    reloadListener: '',
    reloadUserInfo: {},
    stsTokenManager: {},
    tenantId: '',
    uid: '',
  };

  const logOut = async () => {
    try {
      dispatch(authFetching());
      await signOut(auth);
      dispatch(authFetchingSucces(emptyUser));
    } catch (error) {
      dispatch(authFetchingError(error));
    }
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <CustomLink to='/'>
            <Typography
              variant='h6'
              noWrap
              component='div'
              color='#fff'
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <img alt='logo' src='https://wwwest.solutions/logo.png' />
            </Typography>
          </CustomLink>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <CustomLink key={page.name} to={page.path}>
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign='center' color='#000000de'>
                      {page.name}
                    </Typography>
                  </MenuItem>
                </CustomLink>
              ))}
            </Menu>
          </Box>

          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <CustomLink to='/'>
              <img alt='logo' src='https://wwwest.solutions/logo.png' />
            </CustomLink>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <CustomLink key={page.name} to={page.path}>
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              </CustomLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <CustomLink to='/profile'>
                  <Typography textAlign='center' color='#000000de'>
                    Profile
                  </Typography>
                </CustomLink>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                  logOut();
                }}
              >
                <Typography textAlign='center'>Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppMenu;
