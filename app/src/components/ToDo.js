import React from 'react';
import { connect } from 'react-redux';
import { 
  
} 
  from '../actions';

function ToDo() {
  return (
    <div className="ToDo">
      <span>lol</span>
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