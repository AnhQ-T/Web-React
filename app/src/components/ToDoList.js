import React, { useEffect, useState } from 'react';
import {axiosWithAuth as Axios} from '../utils';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ToDoEditForm from './ToDoEditForm';
import ToDoAddForm from './ToDoAddForm';
import ToDo from './ToDo'
// import ToDoSearchBar from './ToDoSearchBar'

import { 
  toggleAdding,
  toggleEditing,
  toggleCompleted,

} 
  from '../actions';





function ToDoList(props) {
  const [list, setList] = useState([])
  let history = useHistory();

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
useEffect(() => {
  
  Axios().get('https://wunderlist2backend.herokuapp.com/api/users/1/lists/1/todos')
    .then(res => {
      console.log(res.data);
      setList(res.data)
    })
    .catch()

}, [])

  return (
    <div className="ToDoList">
      {
        list.map( task => {
          return (
            <>
              <div>{task.todo}</div>
              <button onClick={addToDo}>add</button>
              <button onClick={editToDo}>edit</button>
              <button onClick={markComplete}>complete</button>
            </>
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