import { Dispatch, FC, SetStateAction } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import { PaletteMode, IconButton, Button, Typography, Box } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { UPDATE_THEME_MODE } from '../../constants/actions';
import { useSession } from '../../contexts/SessionProvider';
import { Link } from 'react-router-dom';

const StyledHeader = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  display: 'block',
  width: '100%',
  padding: '16px',
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
      <Box sx={{ maxWidth: '80rem', mx: 'auto' }}>
        <Box sx={{ display: 'grid', alignItems: 'center', gridTemplateColumns: '80px 1fr', gap: '1rem' }}>
          <Box>
            <Typography>Logo</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
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
      </Box>
    </StyledHeader>
  );
};

export default Header;
