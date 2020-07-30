import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Link, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { 

} 
  from './utils';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import './App.css';

import ToDoEditForm from './components/ToDoEditForm'

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
      <h2>{data.message}</h2>
      <Link to='/sign-up'>Sign-Up</Link>
      <Link to='/login'>Login</Link>
      <Link to='/dashboard'>Dashboard</Link>

      <Route 
        path='/sign-up'
        component={Signup}
      />
      <Route 
        path='/login'
        component={Login}
      />
      <PrivateRoute 
        path="/dashboard"
        component={Dashboard}
      />
      <PrivateRoute 
        path='/dashboard/edit'
        component={ToDoEditForm}
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
