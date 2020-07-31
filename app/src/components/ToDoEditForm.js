import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as yup from 'yup'
import formSchema from '../validation/formSchemaAndre'
import styled from 'styled-components'

const initialFormValues = {
  todo: '',
}
const FormContainer = styled.form`
width: 100%;
  display: flex;
  input{ 
    width: 95%;
  }
  button{
    margin-left: 1%;
  }
  #edit-task-container{
    width: 95%
  }
`
function ToDoEditForm ( props ) {
  const [formErrors, setFormErrors] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(true)
  const [active, setActive] = useState(false);
  const [formValues, setFormValues] = useState(props.task);

  const editToDo = ( formValues ) => {
  
    const newToDo = {
      todo: formValues.todo
    };
    axiosWithAuth()
        .put(`/users/${localStorage.getItem('id')}/lists/${formValues.list_id}/todos/${formValues.id}`, newToDo)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
      });
  };

  const cancelEdit = (e) => {
    e.preventDefault();
    props.editToggle();
  };

  const onInputChange = evt => {
    const { name, value } = evt.target;
    console.log(value);
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormValues({
          ...formValues,
          [name]: value,
        })
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

  const onSubmit = ( evt ) => {
    evt.persist();
    console.log("On Submit", formValues);
    editToDo(formValues);
    props.editToggle(evt);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <FormContainer className='edit-form-container' onSubmit={onSubmit}>
        <div id='edit-task-container'>
        <label>
          <input
            name='todo'
            type='text'
            value={formValues.todo}
            onChange={onInputChange}
            placeholder='Enter a Task'
          />
        </label>
        <br />
        </div>
        <button id='editBtn' disabled={disabled} type='submit'>✔️</button>
        <button id='cancelBtn' onClick={cancelEdit}>❌</button>
        <p>{formErrors.task}</p>
    </FormContainer>
  );
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(
  mapStateToProps, 
  { 

  }
)(ToDoEditForm);
