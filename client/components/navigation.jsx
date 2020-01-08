import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <div className="sidenav position-fixed">
        <div className="d-flex flex-column align-items-center">
          <i className="navicon home-icon fas fa-home mt-5"></i>
          <div className="home m-4">Home</div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <i className="navicon me-icon fas fa-user"></i>
          <div className="about-me m-4">About Me</div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <i className="navicon project-icon fas fa-project-diagram"></i>
          <div className="project-list m-4">Projects</div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <i className="navicon contact-icon fas fa-address-book"></i>
          <div className="contact m-4">Contact</div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <i className="navicon resume-icon fas fa-file"></i>
          <div className="resume m-4">Resume</div>
        </div>
      </div>
    );
  }
}

export default Navigation;
