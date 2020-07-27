import React from 'react';
import { connect } from 'react-redux';


cosnt ToDo = (props)=> {
  const {details} = props

  if (!details) {
    return <h3>Working fetching new task&apos;s details...</h3>
  }
  return (
    <div className="ToDo">
      <span>lol</span>
      <div className = 'to-do-container'>
        <h2>{details.task}</h2>
        <p>{details.description}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(
  mapStateToProps, 
  {  }
)(ToDo);
