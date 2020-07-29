import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ToDoListEditForm from './ToDoListEditForm';

import { axiosWithAuth } from '../utils';
import { 
  deleteToDoLists,
  editToDoList,
  toggleEditing,

  } 
  from '../actions';

import { useHistory } from 'react-router-dom';

import styled from 'styled-components'

import ToDoEditForm from './ToDoEditForm';
import ToDoAddForm from './ToDoAddForm';
import ToDo from './ToDo'



function ToDoList (props) {
  const [data, setData] = useState([])
  const [isEditing, setIsEditing] = useState(false);


  const userID = localStorage.getItem('id')
  // console.log(props);
  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userID}/lists/${props.listID}/todos`)
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
  }, [])

  const addToDo = (e) => {
    e.preventDefault();
    props.toggleAdding();
  };

  const editList = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const deleteList = (e) => {
    e.preventDefault();
    props.deleteToDoLists( props.listID );

  };

  return (
      <div className="ToDoList">
        

        { isEditing ? <ToDoListEditForm list={props.list}/> : <h2 onClick={editList}>{props.list}</h2>}
        <button onClick={addToDo}>add</button>
        {
          data.map( task => {
            return (
              // <div onClick={markCompleted}>
                <ToDo key={task.id} taskID={task.id} task={task}/>
              // </div>
            )
          })
        }
        <button onClick={deleteList}>X</button>
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
    toggleEditing,
  }
)(ToDoList);
