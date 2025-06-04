import { Dispatch, FC, SetStateAction } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import {
  styled,
  // useTheme
} from '@mui/material/styles';
import {
  PaletteMode,
  Button,
  Typography,
  Box,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  // IconButton
} from '@mui/material';
import {
  Close,
  ContactPage,
  Info,
  Menu,
  Work,
  // DarkMode, LightMode
} from '@mui/icons-material';
// import { UPDATE_THEME_MODE } from '../../constants/actions';
// import { useSession } from '../../contexts/SessionProvider';
import { Link, useNavigate } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';

const StyledHeader = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  display: 'block',
  width: '100%',
  padding: '16px',
  boxShadow: 'none',
  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.background.paper, // update dark color in palette when decided
  backdropFilter: 'blur(5px)',
  '-webkit-backdrop-filter': 'blur(5px)',
  '--tw-backdrop-blur': 'blur(5px)',
  backgroundImage: 'none',
  borderBottom: theme.palette.mode === 'dark' ? `1px solid ${theme.palette.action.disabledBackground}` : 'none',
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

const Header: FC<HeaderProps> = () =>
  // props
  {
    // const { setTheme } = props;

    // const theme = useTheme();

    // const { dispatch } = useSession();

    const size = useWindowSize();

    const navigate = useNavigate();

    // const toggleTheme = () => {
    //   const newTheme = theme.palette.mode === 'light' ? 'dark' : 'light';
    //   dispatch({ type: UPDATE_THEME_MODE, payload: newTheme });
    //   setTheme(newTheme);
    //   const htmlDoc = document.getElementById('html-root');
    //   if (htmlDoc) htmlDoc.style['color-scheme' as any] = newTheme;
    // };

    const goTo = (url: string) => {
      navigate(url);
    };

    const actions = [
      { icon: <Info />, name: 'ABOUT', action: () => goTo('#about') },
      { icon: <Work />, name: 'EXPERIENCE', action: () => goTo('#experience') },
      { icon: <ContactPage />, name: 'CONTACT', action: () => goTo('#contact') },
      // { icon: theme.palette.mode === 'light' ? <DarkMode /> : <LightMode />, name: 'MODE', action: toggleTheme },
    ];

    return (
      <StyledHeader position="fixed">
        <Box sx={{ maxWidth: '80rem', mx: 'auto' }}>
          <Box sx={{ display: 'grid', alignItems: 'center', gridTemplateColumns: '80px 1fr', gap: '1rem', minHeight: '2.5rem' }}>
            <Box>
              <Link to="#intro" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography>Logo</Typography>
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              {size.width < 640 ? (
                <Box sx={{ position: 'relative' }}>
                  <SpeedDial
                    ariaLabel="Header Speed Dial"
                    sx={{ position: 'absolute', right: -5, top: -28 }}
                    icon={<SpeedDialIcon icon={<Menu />} openIcon={<Close />} />}
                    direction="down"
                  >
                    {actions.map((action) => (
                      <SpeedDialAction key={action.name} icon={action.icon} onClick={action.action} />
                    ))}
                  </SpeedDial>
                </Box>
              ) : (
                <>
                  <Button variant="text" color="info">
                    <Link to="#about" style={{ textDecoration: 'none', color: 'inherit' }}>
                      About
                    </Link>
                  </Button>
                  <Button variant="text" color="info">
                    <Link to="#experience" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Experience
                    </Link>
                  </Button>
                  <Button variant="text" color="info">
                    <Link to="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Contact
                    </Link>
                  </Button>
                  {/* <IconButton onClick={toggleTheme} sx={{ ml: 2 }} color="primary">
                  {theme.palette.mode === 'light' ? <DarkMode /> : <LightMode />}
                </IconButton> */}
                </>
              )}
            </Box>
          </Box>
        </Box>
      </StyledHeader>
    );
  };

export default Header;
