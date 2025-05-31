import { Dispatch, FC, SetStateAction } from 'react';
import { PaletteMode } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

interface AppProps {
  setTheme: Dispatch<SetStateAction<PaletteMode>>;
}

const App: FC<AppProps> = (props) => {
  const { setTheme } = props;

  return (
    <Routes>
      <Route path="/" element={<Home setTheme={setTheme} />} />
    </Routes>
  );
};

export default App;
