import { FC, useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SessionProvider, useSession } from './SessionProvider';
import ErrorBoundary from '../components/Error/ErrorBoundary';
import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import darkTheme from '../theme/dark';
import lightTheme from '../theme/light';
import App from '../App';

const GlobalAppProvider: FC = () => {
  const {
    state: { themeMode },
  } = useSession();

  const [theme, setTheme] = useState<PaletteMode>('dark');

  useEffect(() => {
    if (themeMode === 'light' || themeMode === 'dark') setTheme(themeMode);
    const htmlDoc = document.getElementById('html-root');
    if (htmlDoc) htmlDoc.style['color-scheme' as any] = themeMode === 'light' ? 'light' : 'dark';
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <SessionProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ErrorBoundary>
            <App setTheme={setTheme} />
          </ErrorBoundary>
        </LocalizationProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default GlobalAppProvider;
