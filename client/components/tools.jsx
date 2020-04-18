import React from 'react';

function Tools(props) {
  return (
    <div className="tools d-flex flex-column justify-content-center py-5" id="tools">
      <div className="container mx-auto pt-5">
        <h1 className="heading col-12 text-center pb-2">TOOLS</h1>
        <div className="row py-5">
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-github-plain colored"></i>
            <h5 className="m-3">GitHub</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-visualstudio-plain colored"></i>
            <h5 className="m-3">VS Code</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicons devicons-npm"></i>
            <h5 className="m-3">npm</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-webpack-plain colored"></i>
            <h5 className="m-3">Webpack</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-babel-plain"></i>
            <h5 className="m-3">Babel</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon fab fa-figma"></i>
            <h5 className="m-3">Figma</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-chrome-plain colored"></i>
            <h5 className="m-3">Chrome Dev Tools</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-amazonwebservices-original colored"></i>
            <h5 className="m-3">AWS</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-ubuntu-plain colored"></i>
            <h5 className="m-3">Ubuntu</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-apache-line colored"></i>
            <h5 className="m-3">Apache</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-photoshop-line colored"></i>
            <h5 className="m-3">Adobe Photoshop</h5>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon fab fa-slack"></i>
            <h5 className="m-3">Slack</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
