import React from 'react';
import { connect } from 'react-redux';


function ToDoEditForm() {
  // const {
  //   values,
  //   setValues,
  //   reset,
  //   submitHandlers: { postToDo, putToDo },
  // } = props

  // const onCancel = evt => {
  //   evt.preventDefault()
  //   reset()
  // }

  // const onSubmit = evt => {
  //   evt.preventDefault()
  //   values.id
  //     ? putToDo(values)
  //     : postToDo(values)
  // }

  // const onChange = evt => {
  //   const { name, value } = evt.target
  //   setValues({ ...values, [name]: value })
  // }

  // const isDisabled = () => {
  //   return !values.task.trim() || !values.description.trim()
  // }



  return (
    <form>
      <h3>Edit Tasks</h3>
      <div id='edit-task-container'>
        <input
          name='task'
          type='text'
          // value={values.task}
          // onChange={onChange}
          placeholder='Edit a Task'
        />
        <input
          name='description'
          type='text'
          // value={values.description}
          // onChange={onChange}
          placeholder='Edit the Description'
        />
      </div>
      <button id='editBtn'>Edit</button>
      <button id='cancelBtn'>Cancel</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(
  mapStateToProps, 
  {  }
)(ToDoEditForm);
