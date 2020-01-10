import React from 'react';

function Skills(props) {
  return (
    <div className="skills container d-flex flex-column justify-content-center" id="skills">
      <div className="row mx-auto">
        <h1 className="col-md-12 text-center py-5">Skills</h1>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-3">
          <i className="devicon-javascript-plain colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-3">
          <i className="devicon-react-original colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-3">
          <i className="devicon-php-plain colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-3">
          <i className="mysql devicons devicons-mysql"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-3">
          <i className="jquery devicons devicons-jquery"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-3">
          <i className="devicon-bootstrap-plain colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-3">
          <i className="devicon-html5-plain colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center p-3">
          <i className="devicon-css3-plain colored"></i>
        </div>
      </div>
    </div>
  );
}

export default Skills;
