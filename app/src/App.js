import React from 'react';
import {Link, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { 

} 
  from './utils';
import Signup from './components/Signup';
import Login from './components/Login';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import ToDoDashboard from './components/ToDoDashboard';
import './App.css';


import ToDoAddForm from './components/ToDoAddForm'
import ToDoEditForm from './components/ToDoEditForm'

function App() {

  useEffect(() =>{

    axios.get('')

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

      <PrivateRoute>
        <Link to='/dashboard'>Home</Link>
        <Link to='/dashboard/add'>Add</Link>
      </PrivateRoute>
      <Link to='/sign-up'>Sign-Up</Link>
      <Link to='/login'>Login</Link>

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
        component={ToDoDashboard}
      />
      <PrivateRoute 
        path='/dashboard/add'
        component={ToDoAddForm}        
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
