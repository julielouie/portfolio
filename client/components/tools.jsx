import React from 'react';

function Tools(props) {
  return (
    <div className="tools container d-flex flex-column justify-content-center" id="tools">
      <div className="row mx-auto">
        <h1 className="col-12 text-center pb-5">Tools</h1>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-4">
          <i className="devicon-amazonwebservices-original colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-4">
          <i className="devicon-apache-plain colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-4">
          <i className="devicon-babel-plain colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-4">
          <i className="devicon-webpack-plain colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-4">
          <i className="devicons devicons-npm"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-4">
          <i className="devicon-visualstudio-plain colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-4">
          <i className="fab fa-slack"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-4">
          <i className="devicon-github-plain colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-4">
          <i className="devicon-ubuntu-plain colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-4">
          <i className="fab fa-figma"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-4">
          <i className="devicon-chrome-plain colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-4">
          <i className="devicon-photoshop-line colored"></i>
        </div>
      </div>
    </div>
  );
}

export default Tools;
