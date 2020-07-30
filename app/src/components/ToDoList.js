import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ListEditForm from './ToDoListEditForm';

import { axiosWithAuth } from '../utils';
import { 
  deleteToDoLists,
  addToDo,
  } 
  from '../actions';

import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import ToDo from './ToDo'
// import ToDoSearchBar from './ToDoSearchBar'



function ToDoList (props) {
  const [toDos, setToDos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  console.log(props);
  const userID = localStorage.getItem('id');
  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userID}/lists/${props.list.id}/todos`)
      .then((res) => {
        console.log(res);
        setToDos(res.data);
      })
  }, [props.redirect]);

  const addNewToDo = (e) => {
    e.preventDefault();
    props.addToDo({todo: "New Todo"}, props.list.id);
    
  };

  const toggleEditing = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const deleteList = (e) => {
    e.preventDefault();
    props.deleteToDoLists( props.list.id );

  };

  return (
      <div className="ToDoList">
        { isEditing ? <ListEditForm setIsEditing={setIsEditing} list={props.list.listname} id={props.list.id}/> : <h2 onClick={toggleEditing}>{props.list.listname}</h2>}
        <span onClick={deleteList}>X (list)</span>
        {
          toDos.map( task => {
            return (
              // <div onClick={markCompleted}>
                <ToDo key={task.id} task={task}/>
              // </div>
            )
          })
        }
        
        <button onClick={addNewToDo}>New Todo</button>
      </div>
    )
};

const mapStateToProps = state => {
  return {
    redirect: state.redirect,
    
  };
};

export default connect(
  mapStateToProps, 
  { 
    addToDo,
    deleteToDoLists
  }
)(ToDoList);
