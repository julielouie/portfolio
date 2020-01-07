import React from 'react';

function Projects(props) {
  return (
    <div className="projects container position-relative">
      <div className="pb-5">
        <h1>PROJECTS</h1>
        <div>Full Stack Developer and some more lorem ipsum about my projects...</div>
        <div className="">Github</div>
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

export default Projects;
