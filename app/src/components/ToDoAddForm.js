import React from 'react';
import { connect } from 'react-redux';
import { 
  ADD_TODO,
  ACTION_SUCCESS,
  ACTION_FAILURE,
} 
  from '../actions';

function ToDoAddForm() {
  return (
    <div className="ToDoAdd">
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
)(ToDoAddForm);