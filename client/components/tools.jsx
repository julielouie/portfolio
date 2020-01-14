import React from 'react';

function Tools(props) {
  return (
    <div className="tools d-flex flex-column justify-content-center py-5" id="tools">
      <div className="mx-auto">
        <h1 className="col-12 text-center pb-2">Tools</h1>
        <div className="d-flex flex-wrap pb-5">
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-github-plain colored"></i>
            <p className="">Github</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-visualstudio-plain colored"></i>
            <p className="">VS Code</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicons devicons-npm"></i>
            <p className="">npm</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-webpack-plain colored"></i>
            <p className="">Webpack</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-babel-plain colored"></i>
            <p className="">Babel</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon fab fa-figma"></i>
            <p className="">Figma</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-chrome-plain colored"></i>
            <p className="">Chrome Dev Tools</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-amazonwebservices-original colored"></i>
            <p className="">AWS</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-ubuntu-plain colored"></i>
            <p className="">Ubuntu</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-apache-line colored"></i>
            <p className="">Apache</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-photoshop-line colored"></i>
            <p className="">Adobe Photoshop</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon fab fa-slack"></i>
            <p className="">Slack</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
