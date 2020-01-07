import React from 'react';
import Hero from './hero';
import AboutMe from './about-me';
import Projects from './projects';

class App extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <AboutMe />
        <Projects />
      </>
    );
  }
}

export default App;
