import { Dispatch, FC, SetStateAction } from 'react';
import { PaletteMode } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Layout from './components/Layout';
// import Projects from "./components/Projects";

interface AppProps {
  setTheme: Dispatch<SetStateAction<PaletteMode>>;
}

const App: FC<AppProps> = (props) => {
  const { setTheme } = props;

  return (
    <Layout setTheme={setTheme}>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default App;
