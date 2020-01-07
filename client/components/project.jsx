import React from 'react';

function Project(props) {
  return (
    <>
      <h3>{props.projects[props.current].title}</h3>
      <p>{props.projects[props.current].description}</p>
      <div>{props.projects[props.current].link}</div>
    </>
  );

}

export default Project;
