const white = '#fff';
const black = '#000';
const contrastText = 'rgba(0, 0, 0, 0.87)';
const grey100 = '#f5f5f5';
const grey200 = '#eeeeee';
const grey400 = '#bdbdbd';
const grey700 = '#616161';
const textGrey = 'rgba(255, 255, 255, 0.5)';
const disabledPaper = '#484848';
const backgroundPaper = '#121212';

const darkPalette = {
  common: {
    black,
    white,
  },
  primary: {
    main: '#6eb9db',
    light: '#4fc3f7',
    dark: '#1d678a',
    contrastText,
  },
  secondary: {
    main: '#d97ec0',
    light: '#ffbfee',
    dark: '#7d3669',
    contrastText,
  },
  error: {
    main: '#fa7469',
    light: '#e57373',
    dark: '#9c3a32',
    contrastText,
  },
  warning: {
    main: '#ffca7a',
    light: '#ffb7f4d',
    dark: '#946e35',
    contrastText,
  },
  info: {
    main: '#b08af2',
    light: '#f3e5f5',
    dark: '#694a9e',
    contrastText,
  },
  success: {
    main: '#7ad67e',
    light: '#81c784',
    dark: '#306e33',
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
    primary: white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: textGrey,
    icon: textGrey,
    contrast: contrastText,
  },
  divider: disabledPaper,
  background: {
    paper: backgroundPaper,
    default: backgroundPaper,
  },
  action: {
    active: white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: disabledPaper,
    disabledOpacity: 0.38,
    focus: disabledPaper,
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
};

export default darkPalette;
