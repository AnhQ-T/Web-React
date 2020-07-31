import React, {useState} from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { axiosWithAuth } from '../utils';
import { 
  deleteToDo,
  toggleRedirect
}
  from '../actions';
import ToDoEditForm from './ToDoEditForm';

const TaskContainer = styled.div`
  display: flex;
  border-right: 1px solid #F3F3F3;
  border-bottom: 1px solid #F3F3F3;
  border-radius: 5px;
  margin-bottom: 5%;
  padding: 1%;
  &:hover{
    background:#F3F3F3;
  }
  button{
    margin-left: 2%;
  }
  .todo{
    display: flex;
    align-items: center;
    &:hover{
        cursor: pointer;
        
      }
    h5{
      width:80%;
    }
    & #remove{
    border: 1px solid red;
    border-radius: 4px;
    background: none; 
      &:hover{
        cursor: pointer;
        background: #FFD4D4;

      }
    }
    & #edit {
      border: 1px solid skyblue;
      border-radius: 4px;
      background: none;
      &:hover{
        cursor: pointer;
        background: #D4F3FF;

      }
    }
 
  }

`
  
function ToDo( props ) {
  const [active, setActive] = useState(false);
  const [toggleEditing, setToggleEditing] = useState(false);

  let history = useHistory();

  const deleteAToDo = (e) => {
    e.preventDefault();
    props.deleteToDo(props.task.list_id, props.task.id);
  };

  const editToDoToggle = (e) => {
    console.log('EditToDoToggle');
    setToggleEditing(!toggleEditing);
    props.toggleRedirect();
  };


  const markComplete = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  const completed = active ? "line-through black" : "none";
  const textComp = active ? "grey" : "black"
  
  return (
    <TaskContainer>
      { 
        toggleEditing
      ? <ToDoEditForm key={props.task.id} task={props.task} editToggle={editToDoToggle}/> 
      : 
      <div className="todo">
        <h5 onClick={markComplete} style={{textDecoration: completed, color: textComp}}>{props.task.todo}</h5>
        <button id="remove" onClick={deleteAToDo}>🗑️</button>
        <button id="edit" onClick={editToDoToggle}>✏️</button>
      </div>
  }
    </TaskContainer>
  );
};

export default connect(
  null, 
  { 
    deleteToDo,
    toggleRedirect
  }
)(ToDo);