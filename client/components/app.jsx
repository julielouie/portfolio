import React from 'react';
import Hero from './hero';
import AboutMe from './about-me';

class App extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <AboutMe />
      </>
    );
  }
}

export default App;
