import React from 'react';
import { connect } from 'react-redux';
import { 
  editToDo,
  
} 
  from '../actions';


function ToDoEditForm (props) {

  const editAToDo = (evt) => {
    evt.preventDefault();
    console.log(props);
    props.editToDo(props);
  };

  return (
    <div className="ToDoEdit">
      <span>lol</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(
  mapStateToProps, 
  { editToDo,

  }
)(ToDoEditForm);