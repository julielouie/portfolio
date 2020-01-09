import React from 'react';

function AboutMe(props) {
  return (
    <div className="container py-5 my-5" id="about-me">
      <div className="row">
        <div className="col-12 col-md-6">
          <h4>About Me</h4>
          <div className="my-5">
            <img src="/images/headshot_web.jpg" alt="profile" className="img-fluid" />
          </div>
          <div className="d-flex justify-content-center mb-5">
            <div className="m-auto">
              <i className="fab fa-github"></i>
            </div>
            <div className="m-auto">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="m-auto">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="m-auto">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="m-auto">
              <i className="fas fa-file"></i>
            </div>
          </div>
        </div>
        <p className="col-12 col-md-6">
            I am a full stack developer with a passion and yearning to code, program, build, and learn more about new technologies and implementations.
            As a relatively recent university graduate, my previous work experience has been very human-centric.
            They took place in multiple, divergent environments, where I was able to pick up a variety of practical intrapersonal, technical, and communicative skills.
            From implementing ELAN behavioral coding software in a research laboratory, to drawing blood and taking radiographs of animals in a medical environment, I have had the privilege of learning how to mold myself into a multi-functional tool and asset.
            While continuing to grow in these paths, it became very evident to me that there are many careers which, while fulfilling and deep in their own respects, often &quot;cap out&quot; in knowledge at a certain point in time.
            I began to search backwards for an alternative career where I could always continue to learn and grow, and recalled a Java class that I took and enjoyed in university.
            After researching heavily for five months, I resigned from my position as a Veterinary Assistant and enrolled in the LearningFuze Accelerated Web Development Program in Irvine, CA.
            At LearningFuze, I was provided with the opportunity to solidify my programming knowledge as a full-stack developer, while working on several projects supervised by multiple senior developers.
            As I continued to grow, I have developed a robust understanding of JavaScript, jQuery, and React. I have also enjoyed working with PHP and MySQL.
            My client-focused experience combined with the skills and knowledge I have acquired as a Developer would make me a great asset to your team.
            It would be an amazing opportunity to be able to bring my enthusiasm and dedication for programming to your company.
        </p>
      </div>
      <div className="highlight"></div>
    </div>
  );
}

export default AboutMe;
