import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ListEditForm from './ListEditForm';

import { axiosWithAuth } from '../utils';
import { 
  deleteToDoLists,
  addToDo,
  } 
  from '../actions';

import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import ToDo from './ToDo';


const ListContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  background: white;
  color: black;
  border-radius: 10px;
  padding: 2%;
  align-items: center;
  margin: 1% 0;
  
  div{
    width: 100%;
  }

  #top{
    display: flex;
    align-items: center;
    width: 100%;
    & h2 {
      width: 99%;
      padding-left: 6%;
      text-align: center;
    }
    & button {
      color: red;
      border: none;
      border-radius: 4px;
      background: none; 
      padding: 0.6% 1.5%;
      &:hover{
        cursor: pointer;
        background: #FFD4D4;
      }
    }
  }

  #newTaskBtn{
    width: 40%;
    color: green;
    border: none;
    padding: 2%;
    border-radius: 5px;
    &:hover{
      cursor: pointer;
      background:#E3E3E3;
    }
    
  }
` 


function ToDoList (props) {
  const [toDos, setToDos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  // console.log(props);
  const userID = localStorage.getItem('id');
  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userID}/lists/${props.list.id}/todos`)
      .then((res) => {
        // console.log(res);
        setToDos(res.data);
      })
  }, [props.redirect]);

  const addNewToDo = (e) => {
    e.preventDefault();
    props.addToDo({todo: "New Task"}, props.list.id);
    
  };

  const toggleEditing = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const deleteList = (e) => {
    e.preventDefault();
    props.deleteToDoLists( props.list.id );

  };
{isEditing ? (code) : null}
  return (
      <ListContainer>
        <div id="top">
        { isEditing ? <ListEditForm setIsEditing={setIsEditing} list={props.list.listname} id={props.list.id}/> : <h2 onClick={toggleEditing}>{props.list.listname}</h2>}
        <button onClick={deleteList}>❌</button>
        </div>
        {
          toDos.map( task => {
            return (
                <ToDo key={task.id} task={task}/>
            )
          })
        }
        
        <button id="newTaskBtn"onClick={addNewToDo}>+Task</button>
      </ListContainer>
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
