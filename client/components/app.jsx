import React from 'react';
import Hero from './hero';
import AboutMe from './about-me';
import ProjectList from './project-list';

class App extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <AboutMe />
        <ProjectList />
      </>
    );
  }
}

export default App;
