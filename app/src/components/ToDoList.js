import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ToDoEditForm from './ToDoEditForm';
import ToDoAddForm from './ToDoAddForm';
import ToDo from './ToDo'

import { 
  toggleAdding,
  toggleEditing,
  toggleCompleted,

} 
  from '../actions';





function ToDoList(props) {
  const [toDoList, setToDoList] = useState([])
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

  Axios.get('https://wunderlist2backend.herokuapp.com/')
    .then(res => {
      console.log(res.data);
      setToDoList(res)
    })
    .catch()
  return (
    <div className="ToDoList">
      {
        toDoList.map( task => {
          return (
            <ToDo task={task}/>
            // <button onClick={addToDo}></button>
            // <button onClick={editToDo}></button>
            // <button onClick={markComplete}></button>
          )
        })
      }
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