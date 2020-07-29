import React, {useState} from 'react';
import { connect } from 'react-redux';
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

  return (
    <div className="ToDo">
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