import React from 'react';

function AboutMe(props) {
  return (
    <div className="container py-5" id="about-me">
      <div className="row my-5">
        <div className="col-12 col-lg-4">
          <h1 className="heading text-center">ABOUT ME</h1>
          <div className="my-5">
            <img src="/images/watercolor-stripes.png" alt="profile" className="img-fluid" />
          </div>
          <div className="d-flex justify-content-center mb-5">
            <a className="click link-icon m-auto text-dark" href="https://github.com/juliehchung" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <i className="fab fa-github"></i>
            </a>
            <a className="click link-icon m-auto text-dark" href="https://www.linkedin.com/in/juliehchung/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="click link-icon m-auto text-dark" href="tel:9099578113" aria-label="Phone">
              <i className="fas fa-phone-alt"></i>
            </a>
            <a className="click link-icon m-auto text-dark" href="mailto:juliehchung96@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a className="click link-icon m-auto text-dark" href="https://drive.google.com/file/d/1ix45jqcz2q1I8EhHII9RN2KeBrlSxv1D/view?usp=sharing" aria-label="Resume">
              <i className="fas fa-file"></i>
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-8 my-auto">
          <p className="px-3">
            My name is Julie Chung, and I am a Software Engineer with a passion and yearning to code, program, build, and learn more about new technologies and implementations.
          </p>
          <p className="px-3">
            I have a robust understanding of JavaScript (ES5 & ES6), React.js, jQuery, Aurelia, Angular, HTML5, and CSS3. Additionally, I enjoy working with Node.js, Express, PostgreSQL, PHP, MySQL, and I have strong experience with tools such as Git/GitHub, Webpack, npm, and Bootstrap. I also have experience with development in C# and ASP.NET Core.
          </p>
          <p className="px-3">
            With the privilege of creating and contributing to multiple team-based and solo applications, I am experienced in both full-stack and front-end focused work.
          </p>
          <p className="px-3">
            My client-focused experience combined with the skills and knowledge I have acquired while programming would make me a great asset to your team. It would be an amazing opportunity to be able to bring my enthusiasm and dedication for programming to your company.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
