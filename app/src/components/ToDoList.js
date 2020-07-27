import React from 'react';
import { connect } from 'react-redux';
import { 
  toggleAdding,
  toggleEditing,
  toggleCompleted,

} 
  from '../actions';


function ToDoList() {
  
  return (
    <div className="ToDoList">
      <span>lol</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAdding: state.isAdding,
    isEditing: state.isEditing,
    isCompleted: state.isCompleted,
  };
};

export default connect(
  mapStateToProps, 
  { 
  toggleAdding,
  toggleEditing,
  toggleCompleted,
  
})(ToDoList);