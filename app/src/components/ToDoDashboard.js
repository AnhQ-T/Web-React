import React, { useEffect, useState } from 'react';
import { axiosWithAuth as Axios} from '../utils';
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
import ToDoCategory from './ToDoDashboard';

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
    props.markComplete(props);
  };
  const userID = localStorage.getItem('id');

    
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
  
  Axios().get(`/users/${userID}/lists`)
    .then(res => {
      console.log(res);
      setList(res.data);
      debugger
    })
    .catch()

}, [])

  return (
    <div className="ToDoDashboard">

      {
        list.map(( userID ) => {
          return (
            <>
              <ToDoList />
              {/* <div>{task.todo}</div>
              <button onClick={addToDo}>add</button>
              <button onClick={editToDo}>edit</button>
              <button onClick={markComplete}>complete</button> */}
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