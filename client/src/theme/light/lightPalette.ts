const white = '#fff';
const black = '#000';
const contrastText = white;
const grey100 = '#f5f5f5';
const grey200 = '#eeeeee';
const grey400 = '#bdbdbd';
const grey700 = '#616161';
const disabledPaper = '#EBECEC';

const lightPalette = {
  common: {
    black,
    white,
  },
  primary: {
    main: '#00a2ed',
    light: '#82838c',
    dark: '#04618c',
    contrastText,
  },
  secondary: {
    main: '#D827AA',
    light: '#ec8dcc',
    dark: '#8a0c68',
    contrastText,
  },
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#821010',
    contrastText,
  },
  warning: {
    main: '#e38900',
    light: '#ff9800',
    dark: '#a66400',
    contrastText,
  },
  info: {
    main: '#661AE6',
    light: '#b897f2',
    dark: '#451a8f',
    contrastText,
  },
  success: {
    main: '#24a329',
    light: '#4caf50',
    dark: '#1b5e20',
    contrastText,
  },
  grey: {
    50: '#fafafa',
    100: grey100,
    200: grey200,
    300: '#e0e0e0',
    400: grey400,
    500: '#9e9e9e',
    600: '#757575',
    700: grey700,
    800: '#424242',
    900: '#212121',
    A100: grey100,
    A200: grey200,
    A400: grey400,
    A700: grey700,
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  divider: disabledPaper,
  background: {
    paper: white,
    default: white,
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: disabledPaper,
    disabledOpacity: 0.38,
    focus: disabledPaper,
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};

export default lightPalette;
