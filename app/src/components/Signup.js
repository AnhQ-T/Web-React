import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils';
import React, { useState, useEffect } from 'react';
import { Link, Route, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as yup from 'yup'
import formSchema from '../validation/formSchemaZavier'

const initialFormValues = {
  username: '',
  // email: '',
  password: '',
  // verifyPassword: '',
};


const SignUpBox = styled.div`
  background: white;
  color: black;
  border-right: 8px solid #01524c;
  border-bottom: 8px solid #01524c;
  border-radius: 20px;
  width: 20%;
  padding-bottom: 1%;

  form { 
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    text-align: center;
  }
  input{
    border-radius: 4px;
    &:focus{
      border: 3.5px solid #ed9b40;
    }
  }
  .btn {
    background: #ed9b40;
    width: 20%;
    margin: 2%;
    border-radius: 4px;
      &:hover{
        cursor: pointer;
      }
  }
  .errors{
    color: red
  }
  
`

function Signup () {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true);
  const [data, setData] = useState({});

  let history = useHistory();

  const addUser = (formValues) => {
    axiosWithAuth()
    .post('/register', formValues)
    .then(res => {
      console.log(res);
      localStorage.setItem('id', res.data.data.id);
      localStorage.setItem('token', res.data.token);
    })
    .catch(err => {
      console.log(err.message);
    });
    history.push('/dashboard');
  }
  const onInputChange = (evt) => {
    const { name, value } = evt.target
    console.log( value );

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
    })
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid)
    })
  }, [formValues])

  const onSubmit = (evt) => {
    // console.log(evt);
    evt.preventDefault();
    addUser(formValues);
  }

  return (
    <SignUpBox>
      <h2>Sign-Up</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Username</label><br />
          <input
            type="text"
            name="username"
            onChange={onInputChange}
            value={formValues.username}
          />
        </div>
        <div className='errors'>{formErrors.username}</div>

        {/* <div>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            onChange={onInputChange}
            value={formValues.email}
          />
        </div> */}
        {/* <div className='errors'>{formErrors.email}</div> */}
        <div>
          <label>Password</label><br />
          <input
            type="password"
            name="password"
            onChange={onInputChange}
            value={formValues.password}
          />
        </div>
        <div className='errors'>{formErrors.password}</div>
        {/* <div>
          <label>Verify Password</label><br />
          <input
            type="password"
            name="verifyPassword"
            onChange={onInputChange}
            value={formValues.verifyPassword}
          ></input>
        </div>
        <div className='errors'>{formErrors.verifyPassword}</div> */}
        <button className='btn' type='submit' disabled={disabled}>Sign-Up</button>
      </form>
    </SignUpBox>
  )
};

export default connect(
  null, 
  {  }
)(Signup);