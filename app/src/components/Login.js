import { connect } from 'react-redux';
import React, {useState}from 'react';
import { Link, Route, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { 
  loginUser,

} 
  from '../actions';


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



function Login (props) {
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  const [credentials, setCredentials] = useState({
    username: props.username,
    password: props.password,
  });

  let history = useHistory();

  const onInputChange = (evt) => {
    const { name, value } = evt.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(credentials);
    props.loginUser(credentials);
    history.push('/');
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
              value={credentials.username}
            ></input>
          </div>
          <div className='errors'>{formErrors.username}</div>

          <div>        
            <label className="labels">Password</label><br/>
            <input
              type="password"
              name="password"
              onChange={onInputChange}
              value={credentials.password}
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
    username: state.username,
    password: state.password,
  };
};

export default connect(
  mapStateToProps, 
  { 
  loginUser,

  
})(Login);