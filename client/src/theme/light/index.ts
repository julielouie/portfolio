import { createTheme } from '@mui/material/styles';
import lightPalette from './lightPalette';
import overrides from '../overrides';

const lightTheme = createTheme({
  typography: {
    body1: {
      color: lightPalette.text.primary,
    },
    h1: {
      color: lightPalette.text.primary,
    },
    h2: {
      color: lightPalette.text.primary,
    },
    h3: {
      color: lightPalette.text.primary,
    },
    h4: {
      color: lightPalette.text.primary,
    },
    h5: {
      color: lightPalette.text.primary,
    },
    h6: {
      color: lightPalette.text.primary,
    },
  },
  palette: {
    ...lightPalette,
    mode: 'light',
  },
  components: overrides,
});

export default lightTheme;
