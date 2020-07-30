import React, {useState} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { 
  toggleEditing,
}
  from '../actions';



function ToDo(props, {task}) {
  const [active, setActive] = useState(false)

  const editToDo = (e) => {
    e.preventDefault();
    props.toggleEditing(props);
  };

  const markComplete = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  const completed = active ? "line-through black" : "none";

  return (
    <div className="ToDo">
      <span style={{textDecoration: completed}}>To Do</span>
      <button onClick={editToDo}>edit</button>
      <button id={task.id} onClick={markComplete}>complete</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isEditing: state.isEditing,
  };
};

export default connect(
  mapStateToProps, 
  { 
    toggleEditing, 
  }
)(ToDo);