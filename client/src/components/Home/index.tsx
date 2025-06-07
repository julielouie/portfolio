import { PaletteMode } from '@mui/material';
import { Dispatch, FC, SetStateAction } from 'react';
import About from '../About';
import Experience from '../Experience';
import Contact from '../Contact';
import Layout from '../Layout';
import Intro from '../Intro';
import ScrollTopButton from '../ScrollToTop';
// import Projects from "./components/Projects";

interface IHomeProps {
  setTheme: Dispatch<SetStateAction<PaletteMode>>;
}

const Home: FC<IHomeProps> = (props) => {
  const { setTheme } = props;

  return (
    <Layout setTheme={setTheme}>
      <Intro />
      <About />
      <Experience />
      <Contact />
      <ScrollTopButton />
    </Layout>
  );
};

export default Home;
