import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ToDoEditForm from './ToDoEditForm';
import ToDoAddForm from './ToDoAddForm';
import { 
  toggleAdding,
  toggleEditing,
  toggleCompleted,

} 
  from '../actions';


function ToDoList (props) {

  console.log(props.isAdding);
  console.log(props.isEditing);
  console.log(props.isCompleted);

  const addToDo = (e) => {
    e.preventDefault();
    props.toggleAdding(props);
  };

  const editToDo = (e) => {
    e.preventDefault();
    props.toggleEditing(props);
  };

  const markComplete = (e) => {
    e.preventDefault();
    props.toggleCompleted(props);
  };
    


  return (
    <div className="ToDoList">
      <button onClick={addToDo}></button>
      <button onClick={editToDo}></button>
      <button onClick={markComplete}></button>
      { (toggleEditing === true) ? <ToDoEditForm/> : null}
      { (toggleAdding === true) ? <ToDoAddForm/> : null}
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