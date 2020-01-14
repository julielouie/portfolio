import React from 'react';

function Skills(props) {
  return (
    <div className="d-flex flex-column justify-content-center py-5" id="skills">
      <div className="mx-auto">
        <h1 className="col-12 text-center pb-5">Skills</h1>
        <div className="d-flex flex-wrap pb-5">
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-javascript-plain colored"></i>
            <p className="">JavaScript</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-react-original colored"></i>
            <p className="">React.js</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-php-plain colored"></i>
            <p className="">PHP</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon mysql devicons devicons-mysql"></i>
            <p className="">MySQL</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon jquery devicons devicons-jquery"></i>
            <p className="">jQuery</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-bootstrap-plain colored"></i>
            <p className="">Bootstrap</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-html5-plain colored"></i>
            <p className="">CSS3</p>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i className="icon devicon-css3-plain colored"></i>
            <p className="">HTML5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
