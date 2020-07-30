import React, {useState} from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { 
  toggleEditing,
  deleteToDo,
}
  from '../actions';


function ToDo(props) {
  const [active, setActive] = useState(false);
  const [toggleEditing, setToggleEditing] = useState(false);

  let history = useHistory();

  const deleteAToDo = (e) => {
    e.preventDefault();
    props.deleteToDo(props.task.list_id, props.task.id);
  };

  console.log(toggleEditing);

  const editToDo = (e) => {
    e.preventDefault();
    setToggleEditing(!toggleEditing);
  };

  if ( toggleEditing ) {
    history.push('/dashboard/edittodo');
  };

  const markComplete = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  console.log(props);

  const completed = active ? "line-through black" : "none";

  return (
    <div className="ToDo">
      <h5 onClick={markComplete} style={{textDecoration: completed}}>{props.task.todo}</h5>
      <span onClick={deleteAToDo}>X (todo)</span>
      <button onClick={editToDo}>edit (todo)</button>
      <button >complete (todo)</button>
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