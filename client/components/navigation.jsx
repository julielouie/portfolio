import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <div className="sidenav position-fixed">
        <div className="click navicon d-flex flex-column align-items-center m-5">
          <i className="home-icon fas fa-home"></i>
        </div>
        <div className="click navicon d-flex flex-column align-items-center m-5">
          <i className="about-me-icon fas fa-user"></i>
        </div>
        <div className="click navicon d-flex flex-column align-items-center m-5">
          <i className="project-list-icon fas fa-project-diagram"></i>
        </div>
        <div className="click navicon d-flex flex-column align-items-center m-5">
          <i className="contact-icon fas fa-address-book"></i>
        </div>
        <div className="click navicon d-flex flex-column align-items-center m-5">
          <i className="resume-icon fas fa-file"></i>
        </div>
      </div>
    );
  }
}

export default Navigation;
