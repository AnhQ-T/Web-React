import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom'
import styled from 'styled-components'
import * as yup from 'yup'

import formSchema from '../validation/formSchemaZavier'

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
  background: white;
  color: black;
  border-radius: 20px;
  width: 20%;
  padding-bottom: 1.5%;

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
    background: #7cae7a;
    color: white;
    width: 20%;
    margin: 2%;
    border-radius: 4px;
  }
  .errors{
    color: red
  }
`

function Signup() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const onInputChange = (evt) => {
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
  };

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <SignUpBox>
      <h2>Sign-Up</h2>
      <form>
        <div>
          <label>Username<br />
            <input
              type="text"
              name="username"
              onChange={onInputChange}
              value={formValues.username}
            ></input>
          </label>
        </div>
        <div className='errors'>{formErrors.username}</div>

        {/* <div>
          <label>Email<br />
            <input
              type="email"
              name="email"
              onChange={onInputChange}
              value={formValues.email}
            ></input>
          </label>
        </div>
        <div className='errors'>{formErrors.email}</div> */}
        <div>
          <label>Password<br />
            <input
              type="password"
              name="password"
              onChange={onInputChange}
              value={formValues.password}
            ></input>
          </label>
        </div>
        <div className='errors'>{formErrors.password}</div>
        {/* <div>
          <label>Verify Password<br />
            <input
              type="password"
              name="verifyPassword"
              label="Confirm password"
              onChange={onInputChange}
              value={formValues.verifyPassword}
            ></input>
          </label>
        </div> */}
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
  {}
)(Signup);
