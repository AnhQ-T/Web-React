import { connect } from 'react-redux';
import React, {useState}from 'react';
import {Link, Route} from 'react-router-dom';
import styled from 'styled-components';
import { 
  loginUser,

} 
  from '../actions';


const initialFormValues = {
  username: '',
  password: '',
};

const initialFormErrors = {
  username: '',
  password: '',
};

const LoginBox = styled.div`
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

function Login(props) {
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

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(props);
    props.loginUser(formValues);
  };


  return (
    <LoginBox>
      <div>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <div>
            <div>
              <label className="labels">Username</label><br/>
            </div>
            <input
              type="text"
              name="username"
              onChange={onInputChange}
              value={formValues.username}
            ></input>
          </div>
          <div className='errors'>{formErrors.username}</div>

          <div>        
            <label className="labels">Password</label><br/>
            <input
              type="password"
              name="password"
              onChange={onInputChange}
              value={formValues.password}
            ></input>
          </div>
          <div className='errors'>{formErrors.password}</div>
          <button className='btn' type='submit'>Login</button>
        </form>
      </div>
    </LoginBox>
  )
}

const mapStateToProps = state => {
  return {
    credentials: state.credentials,
    
  };
};

export default connect(
  mapStateToProps, 
  { 
  loginUser,

  
})(Login);