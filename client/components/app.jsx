import React from 'react';
import Hero from './hero';
import AboutMe from './about-me';
import ProjectList from './project-list';
import Contact from './contact';
import Navigation from './navigation';

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <div>
          <Hero />
          <AboutMe />
          <ProjectList />
          <Contact />
        </div>
      </>
    );
  }
}

export default App;
