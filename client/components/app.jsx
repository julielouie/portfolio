import React from 'react';
import Hero from './hero';
import AboutMe from './about-me';
import ProjectList from './project-list';
import Contact from './contact';
import Navigation from './navigation';
import Skills from './skills';
import Tools from './tools';

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <div>
          <Hero />
          <AboutMe />
          <Skills />
          <ProjectList />
          <Tools />
          <Contact />
        </div>
      </>
    );
  }
}

export default App;
