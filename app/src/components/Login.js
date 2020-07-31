import { connect } from 'react-redux';
import React, { useState, useEffect }from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils'
import styled from 'styled-components';
import * as yup from 'yup'
import formSchema from '../validation/formSchemaZavier'


const initialFormValues = {
  username: '',
  password: '',
};

const LoginBox = styled.div`
  background: white;
  color: black;
  border-right: 8px solid #01524c;
  border-bottom: 8px solid #01524c;
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
    &:focus{
      border: 3.5px solid #ed9b40;
    }
  }
  .btn {
    background: #7cae7a;
    color: white;
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



function Login (props) {
  const [formErrors, setFormErrors] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true);
  const [formValues, setFormValues] = useState(initialFormValues);

  let history = useHistory();

  const loginUser = (formValues) => {
    axiosWithAuth()
    .post('/login', formValues)
    .then(res => {
      console.log(res);
      localStorage.setItem('id', res.data.id);
      localStorage.setItem('token', res.data.token);
    })
    .catch(err => {
      console.log(err);      
    });
  };

  const onInputChange = (evt) => {
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
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(formValues);
    loginUser(formValues);
    history.push('/dashboard');
  };

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <LoginBox>
      <div>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <div>
            <label className="labels">Username<br/>
              <input
                type="text"
                name="username"
                onChange={onInputChange}
                value={formValues.username}
              />
            </label>
          </div>
          <div className='errors'>{formErrors.username}</div>

          <div>        
            <label className="labels">Password<br/>
              <input
                type="password"
                name="password"
                onChange={onInputChange}
                value={formValues.password}
              ></input>
            </label>
          </div>
          <div className='errors'>{formErrors.password}</div>
          <button className='btn' type='submit' disabled={disabled}>Login</button>
        </form>
      </div>
    </LoginBox>
  )
}

export default connect(
  null, 
  {})(Login);