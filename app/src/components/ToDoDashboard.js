import React, { useEffect, useState } from 'react';
import { axiosWithAuth as Axios} from '../utils';
import { connect } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import ToDo from './ToDo'
import ToDoEditForm from './ToDoEditForm';
import ToDoAddForm from './ToDoAddForm';
import ToDoList from './ToDoList';
import { 
  toggleAdding,
  toggleEditing,
  toggleCompleted,
  addToDoList,
  editToDoList,
  deleteToDoLists,

} 
  from '../actions';


function ToDoDashboard(props) {
  const [list, setList] = useState([]);

  const newList = {listname: 'New List'}

  const addList = (e) => {
    e.preventDefault();
    props.addToDoList(newList);
  };

  const userID = localStorage.getItem('id');

useEffect(() => {
  
  Axios().get(`/users/${userID}/lists`)
    .then(res => {
      console.log(res);
      setList(res.data);
    })
    .catch(err => {
      console.log(err.message)
    })
  
}, [props.addedList])


  return (
    <div className="ToDoDashboard">
      <h1>Wunderlist</h1>
      <button onClick={addList}>New List</button>
      {
        list.map(( list ) => {
          return (
            <>
              <ToDoList key={list.id} listID={list.id} list={list.listname}/>
              
              <div>{list.todo}</div>
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
  deleteToDoLists,
  editToDoList,
  
  
})(ToDoDashboard);