import { connect } from 'react-redux';
import React, { useState, useEffect }from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup'
import formSchema from '../validation/formSchemaZavier'
import { 
  loginUser,

} from '../actions';


const initialFormErrors = {
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
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  const [credentials, setCredentials] = useState({
    username: props.username,
    password: props.password,
  });

  let history = useHistory();

  console.log(props.data);

  const onInputChange = (evt) => {
    const { name, value } = evt.target;

    yup
    .reach(formSchema, name)

    .validate(value)

    .then( () => {
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
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(credentials);
    props.loginUser(credentials);
    history.push('/dashboard');
  };

  useEffect(() => {
    formSchema.isValid(credentials).then(valid => {
      setDisabled(!valid)
    })
  }, [credentials])

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
                value={credentials.username}
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
                value={credentials.password}
              ></input>
            </label>
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
    data: state.data,
  };
};

export default connect(
  mapStateToProps, 
  { 
  loginUser,

  
})(Login);