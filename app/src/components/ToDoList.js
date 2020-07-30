import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ListEditForm from './ToDoListEditForm';

import { axiosWithAuth } from '../utils';
import { 
  deleteToDoLists,
  editToDoList,
  addToDo,
  } 
  from '../actions';

import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import ToDo from './ToDo'



function ToDoList (props) {
  const [toDos, setToDos] = useState([])
  const [isEditing, setIsEditing] = useState(false);

  const userID = localStorage.getItem('id')
  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userID}/lists/${props.list.id}/todos`)
      .then((res) => {
        // console.log(res);
        setToDos(res.data);
      })
  }, [])

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
        { isEditing ? <ListEditForm setIsEditing={setIsEditing} list={props.list.listname}/> : <h2 onClick={toggleEditing}>{props.list.listname}</h2>}
        <button onClick={deleteList}>X</button>
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
    addedList: state.addedList,

  };
};

export default connect(
  mapStateToProps, 
  { 
    editToDoList,
    addToDo,
    deleteToDoLists
  }
)(ToDoList);
