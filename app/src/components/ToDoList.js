import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

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

  console.log(props);
  useEffect(() => {
    // axiosWithAuth()
    //   .get(``)
    //   .then((res) => {
    //     console.log(res.data);
    //     setData(res.data);
    //   })
  }, [])

  const addToDo = (e) => {
    e.preventDefault();
    props.toggleAdding();
  };

  const editToDo = (e) => {
    e.preventDefault();
    props.toggleEditing();
  }

  const deleteList = (e) => {
    e.preventDefault();
    props.deleteToDoLists( props.listID );

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
        
        <button onClick={addToDo}>add</button>
        <button onClick={deleteList}>X---X</button>
        {
          data.map( task => {
            return (
              <div onClick={editToDo}>
                <ToDo key={task.id} taskID={task.id} task={task}/>
              </div>
            )
          })
        }
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
    deleteToDoLists,
    editToDoList,
    toggleEditing,
  }
)(ToDoList);
