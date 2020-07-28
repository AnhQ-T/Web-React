import { connect } from 'react-redux';
import React, {useState}from 'react';
import { Link, Route, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup'
import formSchema from '../validation/formSchemaZavier'
import { 
  loginUser,

} 
  from '../actions';


const initialFormErrors = {
  username: '',
  password: '',
};

const LoginBox = styled.div`
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

    yup
    .reach(formSchema, name)

    .validate(value)

    .then( () => {
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

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(credentials);
    props.loginUser(credentials);
    history.push('/');
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
              ></input>
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