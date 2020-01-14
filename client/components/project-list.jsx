import React from 'react';
import Project from './project';

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: 'Full Stack Developer',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolore culpa ratione quaerat deserunt vitae aspernatur numquam cumque tenetur error nihil, hic totam facere! Velit voluptatem corrupti quae labore iste.',
          linkName: 'Github',
          link: 'https://github.com/juliehchung',
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
          description: 'Full stack mobile web application built in 2.5 weeks, in a team of four. Created using using React.js, Bootstrap, PHP, and MySQL, Spontaneous.ly is designed for adventurous people that want to embark on a spontaneous activity.',
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
    const textColor = this.state.currentProject === 1 || this.state.currentProject === 2 ? 'text-white' : null;
    return (
      <div className="projects position-relative" id="projects">
        <div className={`position-absolute ${this.state.projects[this.state.currentProject].class}`}></div>
        <div className="container">
          <div className="col-md-6 pb-5">
            <h1 className={`${textColor} pt-5`}>PROJECTS</h1>
            <Project projects={this.state.projects} current={this.state.currentProject}/>
          </div>
          <div className="row">
            <div className="apps container d-flex flex-wrap justify-content-between position-absolute">
              <div className="col-md-3">
                <div className="click project card"
                  onClick={() => this.handleClick(1)}>
                  <div className="card-body">
                    <h5 className="card-title text-center my-auto py-3">BORKER</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="click project card"
                  onClick={() => this.handleClick(2)}>
                  <div className="card-body">
                    <h5 className="card-title text-center my-auto py-3">Spontaneous.ly</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="click project card"
                  onClick={() => this.handleClick(3)}>
                  <div className="card-body">
                    <h5 className="card-title text-center my-auto py-3">Bobafy</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ProjectList;
