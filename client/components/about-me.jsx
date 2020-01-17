import React from 'react';

function AboutMe(props) {
  return (
    <div className="container py-5" id="about-me">
      <div className="row my-5">
        <div className="col-12 col-md-4">
          <h1>ABOUT ME</h1>
          <div className="my-5">
            <img src="/images/watercolor-stripes-2.png" alt="profile" className="img-fluid" />
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
            <a className="click link-icon m-3 text-dark" href="/assets/Julie_Chung.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" download>
              <i className="fas fa-file"></i>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <p className="col-12">
            My name is Julie Chung, and I am a full stack developer with a passion and yearning to code, program, build, and learn more about new technologies and implementations.
            My previous work experiences have been very client-centric. Taking place in multiple, divergent environments, I was able to pick up a variety of practical intrapersonal, technical, and communicative skills.
          </p>
          <p className="col-12">
            From implementing ELAN behavioral coding software in a research laboratory, to drawing blood and taking radiographs of animals in a medical environment, I have had the privilege of learning how to mold myself into a multi-functional tool and asset.
          </p>
          <p className="col-12">
            While continuing to grow in these paths, it became very evident to me that there are many careers which, while fulfilling and deep in their own respects, often &quot;cap out&quot; in knowledge at a certain point in time.
            I began to search backwards for a career where I could always continue to learn and grow, and recalled a Java class that I took and enjoyed during university.
            After researching heavily for several months, I resigned from my position as a Veterinary Assistant and enrolled in the LearningFuze Accelerated Web Development Program in Irvine, CA.
          </p>
          <p className="col-12">
            At LearningFuze, I was provided with the opportunity to solidify my programming knowledge as a full-stack developer, while working on several projects supervised by multiple senior developers.
            As I continue to grow, I have developed a robust understanding of JavaScript, jQuery, and React. I have also enjoyed working with PHP and MySQL.
          </p>
          <p className="col-12">
            My client-focused experience combined with the skills and knowledge I have acquired as a Developer would make me a great asset to your team.
            It would be an amazing opportunity to be able to bring my enthusiasm and dedication for programming to your company.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
