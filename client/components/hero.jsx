import React from 'react';
import TextLoop from 'react-text-loop';

function Hero(props) {
  const titleArray = ['Full Stack Developer', 'Creator', 'Artist', 'Inventor', 'Designer'];
  return (
    <div className="hero" id="home">
      <div className="container col-md-8">
        <div className="d-flex flex-column">
          <h1 className="name mt-5">JULIE H. CHUNG</h1>
          <h4 className="title"><TextLoop interval={2000} springConfig={{ stiffness: 180, damping: 8 }}>{titleArray}</TextLoop></h4>
        </div>
      </div>
    </div>
  );
}

export default Hero;
