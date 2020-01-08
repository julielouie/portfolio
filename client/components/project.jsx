import React from 'react';

function Project(props) {
  const textColor = props.current === 1 || props.current === 2 ? 'text-white' : null;
  return (
    <>
      <h3 className={`${textColor} mb-3 pt-3`}>{props.projects[props.current].title}</h3>
      <p className={`${textColor} my-3`}>{props.projects[props.current].description}</p>
      <div className={`${textColor} mt-5`}>{props.projects[props.current].link}</div>
    </>
  );

}

export default Project;
