import React from 'react';

function Contact(props) {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="contact d-flex" id="contact">
      <div className="container m-auto">
        <h3 className="heading text-center py-4">
          <img className="contact-brand img-fluid" src="/images/full-stack-logo.png" alt="Julie Chung Full Stack Developer"/>
        </h3>
        <div className="d-flex flex-wrap justify-content-center align-items-center pb-2">
          <div className="col-12 col-md-4 text-center px-4">
            <i className="fas fa-map-marker-alt m-2"></i>
            Orange County, CA
          </div>
          <a className="click col-12 col-md-4 text-center px-4 text-dark" href="tel:9099578113">
            <i className="fas fa-phone-alt m-2"></i>
            (909) 957-8113
          </a>
          <a className="click col-12 col-md-4 text-center px-4 text-dark" href="mailto:juliehchung96@gmail.com">
            <i className="fas fa-envelope m-2"></i>
            juliehchung96@gmail.com
          </a>
        </div>
        <div className="row d-flex justify-content-center pb-4">
          <a className="click link-icon m-3 text-dark" href="https://github.com/juliehchung" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <i className="fab fa-github"></i>
          </a>
          <a className="click link-icon m-3 text-dark" href="https://www.linkedin.com/in/juliehchung/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a className="click link-icon m-3 text-dark" href="/assets/Julie_Chung.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" download>
            <i className="fas fa-file"></i>
          </a>
        </div>
        <hr />
        <div className="text-center nav-font py-5">© Julie Chung {year}</div>
      </div>
    </div>
  );
}

export default Contact;
