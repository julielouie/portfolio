import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { Box, PaletteMode } from '@mui/material';
import Header from './Header';

interface LayoutProps {
  setTheme: Dispatch<SetStateAction<PaletteMode>>;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
  const { setTheme, children } = props;

  return (
    <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
      <Header setTheme={setTheme} />
      <Box component="main" sx={{ width: '100%' }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
