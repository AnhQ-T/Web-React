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
  addToDoList,

} 
  from '../actions';
import ToDoList from './ToDoList';

function ToDoDashboard(props) {
  const [list, setList] = useState([])
  let history = useHistory();


  const newList = {listname: 'New List',}

  const addList = (e) => {
    e.preventDefault();
    props.addToDoList(newList);
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
    })
    .catch()

}, [props.addedList])

  return (
    <div className="ToDoDashboard">
      <button onClick={addList}>Add a List!</button>
      {
        list.map(( list ) => {
          return (
            <>

              <ToDoList key={list.id} listID={list.id}/>
              
              {/* <div>{task.todo}</div>
              
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
    addedList: state.addedList,

  };
};

export default connect(
  mapStateToProps, 
  { 
  toggleAdding,
  toggleEditing,
  toggleCompleted,
  addToDoList,
  
})(ToDoDashboard);