import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ToDoEditForm from './ToDoEditForm';
import ToDoAddForm from './ToDoAddForm';
import { 
  toggleAdding,
  toggleEditing,
  toggleCompleted,

} 
  from '../actions';


function ToDoList (props) {

  let history = useHistory();

  console.log(props.isAdding, 'is adding');
  console.log(props.isEditing, 'is editing');
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
    
  // useEffect( () => {
  //   if (toggleEditing === true){
  //     history.push('/edit');
  //   };
    

  // }, [props.isEditing]);

  // useEffect( () => {
  //   if (toggleAdding === true){
  //     history.push('/add');
  //   };

  // }, [props.isAdding]);


  return (
    <div className="ToDoList">
      <button onClick={addToDo}></button>
      <button onClick={editToDo}></button>
      <button onClick={markComplete}></button>
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