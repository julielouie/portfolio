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
          link: 'Github',
          class: null
        },
        {
          title: 'BORKER',
          description: 'Borker. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolore culpa ratione quaerat deserunt vitae aspernatur numquam cumque tenetur error nihil, hic totam facere! Velit voluptatem corrupti quae labore iste.',
          link: 'borker.juliehchung.com',
          class: 'borker-img project-img'
        },
        {
          title: 'Spontaneous.ly',
          description: 'Spontaneous.ly. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolore culpa ratione quaerat deserunt vitae aspernatur numquam cumque tenetur error nihil, hic totam facere! Velit voluptatem corrupti quae labore iste.',
          link: 'spontaneouslyapp.kevinakahoshi.com',
          class: 'spontaneously-img project-img'
        },
        {
          title: 'Bobafy',
          description: 'Bobafy.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolore culpa ratione quaerat deserunt vitae aspernatur numquam cumque tenetur error nihil, hic totam facere! Velit voluptatem corrupti quae labore iste.',
          link: 'bobafy.juliehchung.com',
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
    return (
      <div className="projects position-relative">
        <div className={`position-absolute ${this.state.projects[this.state.currentProject].class}`}></div>
        <div className="container">
          <div className="col-md-6 pb-5">
            <h1>PROJECTS</h1>
            <Project projects={this.state.projects} current={this.state.currentProject}/>
          </div>
          <div className="row">
            <div className="apps container d-flex flex-wrap justify-content-between position-absolute">
              <div className="col-md-3">
                <div className="click card"
                  onClick={() => this.handleClick(1)}>
                  <div className="card-body">
                    <h5 className="card-title text-center my-auto py-3">BORKER</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="click card"
                  onClick={() => this.handleClick(2)}>
                  <div className="card-body">
                    <h5 className="card-title text-center my-auto py-3">Spontaneous.ly</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="click card"
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
