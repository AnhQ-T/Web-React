import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as yup from 'yup'
import formSchema from '../validation/formSchemaAndre'
import styled from 'styled-components'
import { 
  editToDo,
  
} 
  from '../actions';

const initialFormErrors = {
  task: '',
}
const FormContainer = styled.div`
  display: flex;
  input{ 
    width: 95%;
  }
  button{
    margin-left: 1%;
  }
`
function ToDoEditForm ( props ) {
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)
  const [active, setActive] = useState(false);
  const [formValues, setFormValues] = useState({
    task: props.task,
  });

  console.log(props);

  let history = useHistory();

  const cancelEdit = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  if ( active ) {
    history.push('/dashboard');
  };


  const onSubmit = evt => {
    evt.preventDefault();
    console.log(props);
    props.editToDo(formValues.task, props.task.list_id, props.task.id);
    props.editToggle(evt);
  }

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
  console.log(formValues);

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
            name='task'
            type='text'
            value={formValues.task.todo}
            onChange={onInputChange}
            placeholder='Enter a Task'
          />
        </label>
        <br />

        {/* <label>Description
          <input
            name='description'
            type='text'
            value={formValues.description}
            onChange={onInputChange}
            placeholder='Enter the Description'
          />
        </label> */}
      </div>
      <button id='editBtn' type='submit' disabled={disabled}>✔️</button>
      <button id='cancelBtn' onClick={cancelEdit}>❌</button>
      <p>{formErrors.task}</p>
      {/* <p>{formErrors.description}</p> */}
    </FormContainer>
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
