import { Dispatch, FC, SetStateAction } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import { headerHeight } from '../../constants/globals';
import { Toolbar, PaletteMode, IconButton } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { UPDATE_THEME_MODE } from '../../constants/actions';
import { useSession } from '../../contexts/SessionProvider';

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
        <IconButton onClick={toggleTheme}>{theme.palette.mode === 'light' ? <DarkMode /> : <LightMode />}</IconButton>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
