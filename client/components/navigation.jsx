import React from 'react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const show = this.state.isOpen ? 'show' : null;
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Julie H. Chung</a>
          <button className="collapsed navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#defaultNav"
            aria-controls="defaultNav"
            aria-expanded={this.state.isOpen}
            aria-label="Toggle navigation"
            onClick={this.toggleNav}>
            <i className="fas fa-bars"></i>
          </button>
          <div className={`collapse navbar-collapse justify-content-end ${show}`} id="defaultNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-me">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tools">Tools</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
