import React from 'react';

function Contact(props) {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="container pt-5" id="contact">
      <h3 className="text-center py-4">JULIE H. CHUNG</h3>
      <div className="d-flex flex-wrap justify-content-center align-items-center pb-2">
        <div className="px-4">
          <i className="fas fa-map-marker-alt m-2"></i>
          Orange County/Los Angeles, CA
        </div>
        <div className="px-4">
          <i className="fas fa-phone-alt m-2"></i>
          (909) 957-8113
        </div>
        <div className="px-4">
          <i className="fas fa-envelope m-2"></i>
          juliehchung96@gmail.com
        </div>
      </div>
      <div className="row connect d-flex justify-content-center pb-4">
        <div className="m-3">
          <i className="fab fa-github"></i>
        </div>
        <div className="m-3">
          <i className="fab fa-linkedin-in"></i>
        </div>
        <div className="m-3">
          <i className="fas fa-file"></i>
        </div>
      </div>
      <hr/>
      <div className="text-center py-5">© Julie Chung {year}</div>
    </div>
  );
}

export default Contact;
