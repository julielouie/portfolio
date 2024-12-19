import { createTheme } from '@mui/material/styles';
import darkPalette from './darkPalette';
import overrides from '../overrides';

const darkTheme = createTheme({
  typography: {
    body1: {
      color: darkPalette.text.primary,
    },
    h1: {
      color: darkPalette.text.primary,
    },
    h2: {
      color: darkPalette.text.primary,
    },
    h3: {
      color: darkPalette.text.primary,
    },
    h4: {
      color: darkPalette.text.primary,
    },
    h5: {
      color: darkPalette.text.primary,
    },
    h6: {
      color: darkPalette.text.primary,
    },
  },
  palette: {
    ...darkPalette,
    mode: 'dark',
  },
  components: overrides,
});

export default darkTheme;
