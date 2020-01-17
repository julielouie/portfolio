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
    if (window.innerWidth < 768) {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }

  render() {
    const show = this.state.isOpen ? 'show' : null;
    let offsetNav = -56;
    if (window.innerWidth < 768) {
      offsetNav = -296;
    }
    return (
      <nav className="navigation navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container">
          <Link to="home" spy={true} smooth={true} duration={100} offset={offsetNav} className="click nav-font navbar-brand" onClick={scroll.scrollToTop}>JULIE H. CHUNG</Link>
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
          <div className={`collapse navbar-collapse justify-content-end ${show} py-2`} id="defaultNav">
            <ul className="navbar-nav">
              <li className="nav-item nav-font">
                <Link activeClass="active" to="about-me" spy={true} smooth={true} duration={100} offset={offsetNav} className="click nav-link px-3" onClick={this.toggleNav}>About Me</Link>
              </li>
              <li className="nav-item nav-font">
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={100} offset={offsetNav} className="click nav-link px-3" onClick={this.toggleNav}>Projects</Link>
              </li>
              <li className="nav-item nav-font">
                <Link activeClass="active" to="skills" spy={true} smooth={true} duration={100} offset={offsetNav} className="click nav-link px-3" onClick={this.toggleNav}>Skills</Link>
              </li>
              <li className="nav-item nav-font">
                <Link activeClass="active" to="tools" spy={true} smooth={true} duration={100} offset={offsetNav} className="click nav-link px-3" onClick={this.toggleNav}>Tools</Link>
              </li>
              <li className="nav-item nav-font">
                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={100} offset={offsetNav} className="click nav-link px-3" onClick={this.toggleNav}>Contact</Link>
              </li>
              <li className="nav-item nav-font">
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
