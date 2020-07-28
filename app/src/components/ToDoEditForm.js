import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup'
import formSchema from '../validation/formSchemaAndre'
import { 
  editToDo,
  
} 
  from '../actions';


const initialFormValues = {
  task: '',
  description: '',
}

const initialFormErrors = {
  task: '',
  description: '',
}

function ToDoEditForm ( props ) {
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)
  const [formValues, setFormValues] = useState({
    task: props.task,
    description: props.description,
  });

  const onSubmit = evt => {
    evt.preventDefault();
    // console.log(props);
    // props.editToDo(props);
  }

  const onInputChange = evt => {
    const { name, value } = evt.target;
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <form classname='edit-form-container' onSubmit={onSubmit}>
      <h3>Edit Tasks</h3>
      <div id='edit-task-container'>
        <label>Task
          <input
            name='task'
            type='text'
            value={formValues.task}
            onChange={onInputChange}
            placeholder='Enter a Task'
          />
        </label>
        <br />

        <label>Description
          <input
            name='description'
            type='text'
            value={formValues.description}
            onChange={onInputChange}
            placeholder='Enter the Description'
          />
        </label>
      </div>
      <button id='editBtn' disabled={disabled}>Edit</button>
      <button id='cancelBtn'>Cancel</button>
      <p>{formErrors.task}</p>
      <p>{formErrors.description}</p>
    </form>
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
