import { connect } from 'react-redux';

import React, { useState, useEffect } from 'react';
import { Link, Route, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as yup from 'yup'
import formSchema from '../validation/formSchemaZavier'
import { 
  addUser,

} 
  from '../actions';

const initialFormErrors = {
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

function Signup(props) {
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  const [credentials, setCredentials] = useState({
    username: props.username,
    password: props.password,
  });

  let history = useHistory();

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    console.log(name, value);

    yup
    .reach(formSchema, name)

    .validate(value)

    .then(() => {
      setCredentials({
        ...credentials,
        [name]: value,
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })
    setCredentials({
      ...credentials,
      [name]: value,
    })
  };


  const onSubmit = (evt) => {
    console.log(evt);
    evt.preventDefault();
    console.log(credentials);
    props.addUser(credentials);
    history.push('/dashboard');
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
            value={credentials.username}
          />
        </div>
        <div className='errors'>{formErrors.username}</div>

        {/* <div>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            onChange={onInputChange}
            value={credentials.email}
          />
        </div> */}
        {/* <div className='errors'>{formErrors.email}</div> */}
        <div>
          <label>Password</label><br />
          <input
            type="password"
            name="password"
            onChange={onInputChange}
            value={credentials.password}
          />
        </div>
        <div className='errors'>{formErrors.password}</div>
        {/* <div>
          <label>Verify Password</label><br />
          <input
            type="password"
            name="verifyPassword"
            onChange={onInputChange}
            value={credentials.verifyPassword}
          ></input>
        </div>
        <div className='errors'>{formErrors.verifyPassword}</div> */}
        <button className='btn' type='submit'>Sign-Up</button>
      </form>
    </SignUpBox>
  )
};

const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password,
  };
};

export default connect(
  mapStateToProps, 
  { addUser }
)(Signup);