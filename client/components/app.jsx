import React from 'react';
import Hero from './hero';
import AboutMe from './about-me';
import ProjectList from './project-list';
import Contact from './contact';
import Navigation from './navigation';
import Skills from './skills';

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <div>
          <Hero />
          <AboutMe />
          <ProjectList />
          <Skills />
          <Contact />
        </div>
      </>
    );
  }
}

export default App;
