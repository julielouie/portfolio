import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

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
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#home">Julie H. Chung</a>
          <button className="collapsed navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#defaultNav"
            aria-controls="defaultNav"
            aria-expanded={this.state.isOpen}
            aria-label="Toggle navigation"
            onClick={() => {
              scroll.scrollToTop();
              if (this.state.isOpen) {
                this.toggleNav();
              }
            }}>
            <i className="fas fa-bars"></i>
          </button>
          <div className={`collapse navbar-collapse justify-content-end ${show}`} id="defaultNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link activeClass="active" to="home" spy={true} smooth={true} duration={100} className="click nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" to="about-me" spy={true} smooth={true} duration={100} offset={-56} className="click nav-link">About Me</Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={100} offset={-56} className="click nav-link">Projects</Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" to="skills" spy={true} smooth={true} duration={100} offset={-56} className="click nav-link">Skills</Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" to="tools" spy={true} smooth={true} duration={100} offset={-56} className="click nav-link">Tools</Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={100} offset={-56} className="click nav-link">Contact</Link>
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
