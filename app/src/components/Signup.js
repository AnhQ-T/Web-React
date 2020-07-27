import { connect } from 'react-redux';

import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom'
import styled from 'styled-components'
import { 

} 
  from '../actions';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  verifyPassword: '',
};

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  verifyPassword: '',
};

const SignUpBox = styled.div`
  background: #7CAE7A;
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
  }
  .btn {
    background: #ed9b40;
    width: 20%;
    margin: 2%;
    border-radius: 4px;
  }
`

function Signin() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const onInputChange = (evt) => {
    const { name, value } = evt.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <SignUpBox>
      <h2>Sign-Up</h2>
      <form>
        <div>
          <label>Username</label><br />
          <input
            type="text"
            name="username"
            onChange={onInputChange}
            value={formValues.username}
          ></input>
        </div>
        <div className='errors'>{formErrors.username}</div>

        <div>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            onChange={onInputChange}
            value={formValues.email}
          ></input>
        </div>
        <div className='errors'>{formErrors.email}</div>
        <div>
          <label>Password</label><br />
          <input
            type="password"
            name="password"
            onChange={onInputChange}
            value={formValues.password}
          ></input>
        </div>
        <div className='errors'>{formErrors.password}</div>
        <div>
          <label>Verify Password</label><br />
          <input
            type="password"
            name="verifyPassword"
            onChange={onInputChange}
            value={formValues.verifyPassword}
          ></input>
        </div>
        <div className='errors'>{formErrors.verifyPassword}</div>
        <button className='btn' disabled={disabled}>Sign-Up</button>
      </form>
    </SignUpBox>
  )
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(
  mapStateToProps, 
  {  }
)(Signup);
