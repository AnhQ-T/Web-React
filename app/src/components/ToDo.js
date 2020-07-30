import React, {useState} from 'react';
import { connect } from 'react-redux';
import { 
  toggleEditing,
  deleteToDo,
}
  from '../actions';

function ToDo(props) {
  const [active, setActive] = useState(false);

  const deleteAToDo = (e) => {
    e.preventDefault();
    props.deleteToDo(props.task.list_id, props.task.id);
  };

  const editToDo = (e) => {
    e.preventDefault();
    props.toggleEditing(props);
  };

  const markComplete = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  console.log(props);

  const completed = active ? "line-through black" : "none";

  return (
    <div className="ToDo">
      <h5 style={{textDecoration: completed}}>{props.task.todo}</h5>
      <span onClick={deleteAToDo}>X</span>
      <button onClick={editToDo}>edit</button>
      <button id={props.task.id} onClick={markComplete}>complete</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isEditing: state.isEditing,
    redirect: state.redirect,
  };
};

export default connect(
  mapStateToProps, 
  { 
    toggleEditing,
    deleteToDo,
  }
)(ToDo);