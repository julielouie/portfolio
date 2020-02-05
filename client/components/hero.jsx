import React from 'react';
import TextLoop from 'react-text-loop';

function Hero(props) {
  const titleArray = ['Software Engineer', 'Creator', 'Artist', 'Adventurer', 'Designer', 'Innovator'];
  return (
    <div className="hero" id="home">
      <div className="container col-md-8">
        <div className="d-flex flex-column">
          <h1 className="name col-12 mt-5">
            JULIE H. CHUNG
          </h1>
          <h4 className="title col-12 mt-3 text-muted"><TextLoop className="col-12" interval={1700} springConfig={{ stiffness: 180, damping: 8 }} noWrap={false}>{titleArray}</TextLoop></h4>
        </div>
      </div>
    </div>
  );
}

export default Hero;
