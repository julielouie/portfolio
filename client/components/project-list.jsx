import React from 'react';
import { Link } from 'react-scroll';
import Project from './project';

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: 'Full Stack Developer',
          description: 'My greatest passion is to continue learning and growing as much as I can, for as long as I can. I love the idea of building and creating something, from nothing! The following are a few applications that I have had the pleasure of contributing to, and creating.',
          gitTitle: 'Github',
          gitLink: 'https://github.com/juliehchung',
          class: 'default-img project-img'
        },
        {
          title: 'BORKER',
          description: 'A LAMP stack content management web application, for pet-related e-commerce. Responsive, clean layout with a robust backend built using React.js, Bootstrap, PHP, and MySQL.',
          gitTitle: 'Github',
          gitLink: 'https://github.com/juliehchung/borker',
          linkName: 'Live Site',
          link: 'https://borker.juliehchung.com',
          class: 'borker-img project-img'
        },
        {
          title: 'Spontaneous.ly',
          description: 'Full stack mobile web application built in 2.5 weeks, with a team of four. Created using using React.js, Bootstrap, PHP, and MySQL, Spontaneous.ly is designed for adventurous people that want to embark on a spontaneous activity.',
          gitTitle: 'Github',
          gitLink: 'https://github.com/kevinakahoshi/spontaneous.ly',
          linkName: 'Live Site',
          link: 'https://spontaneouslyapp.com/',
          class: 'spontaneously-img project-img'
        },
        {
          title: 'Bobafy',
          description: 'A JavaScript memory matching application designed to fit a modern, diverse boba-drink aesthetic. Implemented dynamic, mobile-responsive DOM creation, using JavaScript and jQuery.',
          gitTitle: 'Github',
          gitLink: 'https://github.com/juliehchung/bobafy',
          linkName: 'Live Site',
          link: 'https://bobafy.juliehchung.com',
          class: 'bobafy-img project-img'
        }
      ],
      currentProject: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({ currentProject: index });
  }

  render() {
    let offsetNav = -76;
    if (window.innerWidth < 768) {
      offsetNav = -290;
    }
    const textColor = this.state.currentProject === 1 || this.state.currentProject === 2 ? 'text-white' : null;
    return (
      <div className={`container-fluid ${this.state.projects[this.state.currentProject].class} d-flex`} id="projects">
        <div className="row py-5">
          <div className="col-10 col-md-5 pb-5 m-auto">
            <h1 className={`heading ${textColor}`}>PROJECTS</h1>
            <Project projects={this.state.projects} current={this.state.currentProject}/>
          </div>
          <div className="col-10 col-md-5 d-flex flex-column m-auto">
            <div className="mb-5">
              <Link activeClass="active" to="projects" spy={true} smooth={true} duration={100} offset={offsetNav}>
                <div className="click project project-1 card"
                  onClick={() => this.handleClick(1)}>
                  <div className="card-body">
                    <h4 className="card-title text-center my-auto py-3">BORKER</h4>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mb-5">
              <Link activeClass="active" to="projects" spy={true} smooth={true} duration={100} offset={offsetNav}>
                <div className="click project project-2 card"
                  onClick={() => this.handleClick(2)}>
                  <div className="card-body">
                    <h4 className="card-title text-center my-auto py-3">Spontaneous.ly</h4>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link activeClass="active" to="projects" spy={true} smooth={true} duration={100} offset={offsetNav}>
                <div className="click project project-3 card"
                  onClick={() => this.handleClick(3)}>
                  <div className="card-body">
                    <h4 className="card-title text-center my-auto py-3">Bobafy</h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ProjectList;
