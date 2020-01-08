import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div className="home">
          <i className="fas fa-home"></i>
        </div>
        <div className="about-me">
          <i className="fas fa-user"></i>
        </div>
        <div className="project-list">
          <i className="fas fa-project-diagram"></i>
        </div>
        <div className="contact">
          <i className="fas fa-address-book"></i>
        </div>
        <div className="resume">
          <i className="fas fa-file"></i>
        </div>
      </div>
    );
  }
}

export default Navigation;
