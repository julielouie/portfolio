import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <div className="sidenav position-fixed d-flex flex-column align-items-center">
        <div className="navicon home m-4">
          <i className="fas fa-home"></i>
        </div>
        <div className="navicon about-me m-4">
          <i className="fas fa-user"></i>
        </div>
        <div className="navicon project-list m-4">
          <i className="fas fa-project-diagram"></i>
        </div>
        <div className="navicon contact m-4">
          <i className="fas fa-address-book"></i>
        </div>
        <div className="navicon resume m-4">
          <i className="fas fa-file"></i>
        </div>
      </div>
    );
  }
}

export default Navigation;
