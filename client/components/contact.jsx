import React from 'react';

function Contact(props) {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="container pt-5">
      <h3 className="text-center py-5">JULIE H. CHUNG</h3>
      <div className="row pb-5">
        <div className="location mx-auto">
          <i className="fas fa-map-marker-alt m-2"></i>
          Orange County/Los Angeles, CA
        </div>
        <div className="phone mx-auto">
          <i className="fas fa-phone-alt m-2"></i>
          (909) 957-8113
        </div>
        <div className="email mx-auto">
          <i className="fas fa-envelope m-2"></i>
          juliehchung96@gmail.com
        </div>
      </div>
      <div className="row connect pb-5">
        <div className="github mx-auto">
          <i className="fab fa-github"></i>
        </div>
        <div className="linkedin mx-auto">
          <i className="fab fa-linkedin-in"></i>
        </div>
        <div className="resume mx-auto">
          <i className="fas fa-file"></i>
        </div>
      </div>
      <hr/>
      <div className="text-center py-5">© Julie Chung {year}</div>
    </div>
  );
}

export default Contact;
