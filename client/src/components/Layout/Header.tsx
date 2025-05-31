import { Dispatch, FC, SetStateAction } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import { headerHeight } from '../../constants/globals';
import { Toolbar, PaletteMode, IconButton, Button, Grid, Typography, Box } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { UPDATE_THEME_MODE } from '../../constants/actions';
import { useSession } from '../../contexts/SessionProvider';
import { Link } from 'react-router-dom';

const StyledHeader = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  height: headerHeight,
  boxShadow: 'none',
  backgroundColor: theme.palette.background.paper,
  backgroundImage: theme.palette.mode === 'dark' ? 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))' : '',
  color: theme.palette.text.primary,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

interface HeaderProps {
  setTheme: Dispatch<SetStateAction<PaletteMode>>;
}

const Header: FC<HeaderProps> = (props) => {
  const { setTheme } = props;

  const theme = useTheme();

  const { dispatch } = useSession();

  const toggleTheme = () => {
    const newTheme = theme.palette.mode === 'light' ? 'dark' : 'light';
    dispatch({ type: UPDATE_THEME_MODE, payload: newTheme });
    setTheme(newTheme);
    const htmlDoc = document.getElementById('html-root');
    if (htmlDoc) htmlDoc.style['color-scheme' as any] = newTheme;
  };

  return (
    <StyledHeader position="fixed">
      <Toolbar sx={{ display: 'flex', alignItems: 'center', height: headerHeight, width: '100%' }}>
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
          <Box>
            <Typography>Logo</Typography>
          </Box>
          <Box sx={{ ml: 'auto' }}>
            <Button>
              <Link to="#intro" style={{ textDecoration: 'none', color: 'inherit' }}>
                Intro
              </Link>
            </Button>
            <Button>
              <Link to="#about" style={{ textDecoration: 'none', color: 'inherit' }}>
                About
              </Link>
            </Button>
            <Button>
              <Link to="#experience" style={{ textDecoration: 'none', color: 'inherit' }}>
                Experience
              </Link>
            </Button>
            <Button>
              <Link to="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                Contact
              </Link>
            </Button>
            <IconButton onClick={toggleTheme} sx={{ ml: 2 }}>
              {theme.palette.mode === 'light' ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
