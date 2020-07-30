import React, {useState} from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { 
  toggleEditing,
  deleteToDo,
}
  from '../actions';
import ToDoEditForm from './ToDoEditForm';


function ToDo( props ) {
  const [active, setActive] = useState(false);
  const [toggleEditing, setToggleEditing] = useState(false);

  let history = useHistory();

  const deleteAToDo = (e) => {
    e.preventDefault();
    props.deleteToDo(props.task.list_id, props.task.id);
  };

  const editToDo = (e) => {
    e.preventDefault();
    setToggleEditing(!toggleEditing);
  };


  const markComplete = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  const completed = active ? "line-through black" : "none";

  return (
    <div>
      { 
        toggleEditing
      ? <ToDoEditForm key={props.task.id} task={props.task} editToggle={editToDo}/> 
      : 
      <div className="ToDo">
        <h5 onClick={markComplete} style={{textDecoration: completed}}>{props.task.todo}</h5>
        <span onClick={deleteAToDo}>X</span>
        <button onClick={editToDo}>Edit</button>
      </div>
  }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    redirect: state.redirect,
  };
};

export default connect(
  mapStateToProps, 
  { 
    deleteToDo,
  }
)(ToDo);