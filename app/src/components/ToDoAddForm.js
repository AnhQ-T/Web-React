import React from 'react';
import { connect } from 'react-redux';
import { 
  addToDo,

} 
  from '../actions';

function ToDoAddForm (props) {

  const addAToDo = (evt) => {
    evt.preventDefault();
    console.log(props);
    props.addToDo(props);
  };

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
  { addToDo }
)(ToDoAddForm);