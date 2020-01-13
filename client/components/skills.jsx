import React from 'react';

function Skills(props) {
  return (
    <div className="skills container d-flex flex-column justify-content-center py-5" id="skills">
      <div className="row mx-auto">
        <h1 className="col-12 text-center pb-2">Skills</h1>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center devicon-javascript-plain colored"></i>
          <p className="text-center">JavaScript</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center devicon-react-original colored"></i>
          <p className="text-center">React.js</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center devicon-php-plain colored"></i>
          <p className="text-center">PHP</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center mysql devicons devicons-mysql"></i>
          <p className="text-center">MySQL</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center jquery devicons devicons-jquery"></i>
          <p className="text-center">jQuery</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center devicon-bootstrap-plain colored"></i>
          <p className="text-center">Bootstrap</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center devicon-html5-plain colored"></i>
          <p className="text-center">CSS3</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column p-4">
          <i className="icon text-center devicon-css3-plain colored"></i>
          <p className="text-center">HTML5</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
