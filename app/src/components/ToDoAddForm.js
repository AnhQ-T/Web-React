import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup'
import formSchema from '../validation/formSchemaAndre'

const initialFormValues = {
  task: '',
  description: '',
}

const initialFormErrors = {
  task: '',
  description: '',
}

function ToDoAddForm() {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const onSubmit = evt => {
    evt.preventDefault()
    // submit()
  }

  const onInputChange = evt => {
    const { name, value } = evt.target
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
    <form classname = 'form-container' onSubmit = {onSubmit}>
      <h3>Tasks</h3>
      <div id='task-container'>
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
      <button id='submitBtn' disabled = {disabled}>Submit</button>
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
  {}
)(ToDoAddForm);