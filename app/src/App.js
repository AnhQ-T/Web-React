import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Link, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { 

} 
  from './utils';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import './App.css';

const NavBar = styled.div`
  color: #ed9b40;
  display: flex;
  background: #01172f;
  margin-top: 1%;
  width:80%;
  align-items: center; 
  padding: 1%;
  border-radius: 20px;
  justify-content: space-evenly;
  h2{
    width: 75%
  }
  .btn{
    text-decoration: none;
    padding: 0.8%;
    border-radius: 10px;
    &:hover{
      background: #ed9b40;
      color: white;
    }
  }
`

function App() {

  const [data, setData] = useState([])

  useEffect(() =>{

    axios.get('https://wunderlist2backend.herokuapp.com/api/')
// Rubric Item 3
      .then(res => {
        setData(res.data)
        console.log('hi', res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <NavBar>
        <h2>{data.message}</h2>
        <Link className='btn' to='/sign-up'>Sign-Up</Link>
        <Link className='btn' to='/login'>Login</Link>
        <Link className='btn' to='/dashboard'>Dashboard</Link>
      </NavBar>
      <Route 
        path='/sign-up'
        component={Signup}
      />
      <Route 
        path='/login'
        component={Login}
      />
      <PrivateRoute 
        exact path="/dashboard"
        component={Dashboard}
      />

    </div>
  );
}
const mapStateToProps = state => {
  return {


  };
};

export default connect(
  mapStateToProps, 
  {

  }
)(App);
