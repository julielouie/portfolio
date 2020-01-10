import React from 'react';

function Skills(props) {
  return (
    <div className="skills container d-flex flex-wrap" id="skills">
      <div className="col-md-12">
        <h1 className="text-center">Skills</h1>
      </div>
      <div className="row col-md-12 mx-auto">
        <div className="icon col-6 col-md-3 d-flex justify-content-center">
          <i className="devicon-javascript-plain colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center">
          <i className="devicon-react-original colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center">
          <i className="devicon-php-plain colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center">
          <i className="mysql devicons devicons-mysql"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center">
          <i className="jquery devicons devicons-jquery"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center">
          <i className="devicon-bootstrap-plain colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center">
          <i className="devicon-html5-plain colored"></i>
        </div>
        <div className="icon col-6 col-md-3 d-flex justify-content-center">
          <i className="devicon-css3-plain colored"></i>
        </div>
      </div>
    </div>
  );
}

export default Skills;
