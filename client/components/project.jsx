import React from 'react';

function Project(props) {
  const textColor = props.current === 1 || props.current === 2 ? 'text-white' : 'text-dark';
  const borderColor = props.current === 1 || props.current === 2 ? 'border' : 'border border-dark';
  const liveCode = props.current !== 0 ? <a className={`proj-link ${textColor} my-5 mr-3 ${borderColor} rounded p-2`} href={props.projects[props.current].gitLink} target="_blank" rel="noopener noreferrer">
    {props.projects[props.current].gitTitle }
    <i className="fas fa-external-link-alt ml-2"></i>
  </a> : null;
  return (
    <>
      <h3 className={`${textColor} mb-3 pt-3`}>{props.projects[props.current].title}</h3>
      <h5 className={`${textColor} my-3 py-2`}>{props.projects[props.current].description}</h5>
      {liveCode}
      <a className={`proj-link ${textColor} my-5 ${borderColor} rounded p-2`} href={props.projects[props.current].link} target="_blank" rel="noopener noreferrer">
        {props.projects[props.current].linkName}
        <i className="fas fa-external-link-alt ml-2"></i>
      </a>
    </>
  );

}

export default Project;
