import React from 'react';

class Projects extends React.Component {

  render() {
    return (
      <div className="projects container position-relative">
        <div className="col-md-6 pb-5">
          <h1 className="">PROJECTS</h1>
          <h3 className="">Full Stack Developer</h3>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolore culpa ratione quaerat deserunt vitae aspernatur numquam cumque tenetur error nihil, hic totam facere! Velit voluptatem corrupti quae labore iste.</p>
          <div>Github</div>
        </div>
        <div className="row">
          <div className="apps container d-flex flex-wrap justify-content-between position-absolute">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center my-auto py-3">BORKER</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center my-auto py-3">Spontaneous.ly</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center my-auto py-3">Bobafy</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Projects;
