import React from 'react';

function Tools(props) {
  return (
    <div className="tools container d-flex flex-column justify-content-center py-5" id="tools">
      <div className="row mx-auto">
        <h1 className="col-12 text-center pb-2">Tools</h1>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center devicon-github-plain colored"></i>
          <p className="text-center">Github</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center devicon-visualstudio-plain colored"></i>
          <p className="text-center">VS Code</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center devicons devicons-npm"></i>
          <p className="text-center">npm</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center devicon-webpack-plain colored"></i>
          <p className="text-center">Webpack</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center devicon-babel-plain colored"></i>
          <p className="text-center">Babel</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center fab fa-figma"></i>
          <p className="text-center">Figma</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center devicon-chrome-plain colored"></i>
          <p className="text-center">Chrome Dev Tools</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center devicon-amazonwebservices-original colored"></i>
          <p className="text-center">AWS</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center devicon-ubuntu-plain colored"></i>
          <p className="text-center">Ubuntu</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center devicon-apache-line colored"></i>
          <p className="text-center">Apache</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center devicon-photoshop-line colored"></i>
          <p className="text-center">Adobe Photoshop</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center fab fa-slack"></i>
          <p className="text-center">Slack</p>
        </div>
      </div>
    </div>
  );
}

export default Tools;
