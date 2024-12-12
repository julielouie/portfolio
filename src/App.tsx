import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
