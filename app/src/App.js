import React from 'react';
import {Link, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import ToDoItems from './components/ToDoItems';
import './App.css';


import ToDoAddForm from './components/ToDoAddForm'
import ToDoEditForm from './components/ToDoEditForm'

function App() {
  return (
    <div className="App">

      <Link to='/add'>Add</Link>
      <Link to='/edit'>Edit</Link>
      <Link to='/sign-up'>Sign-Up</Link>
      <Link to='/login'>Login</Link>

      <Route path='/add'><ToDoAddForm/></Route>
      <Route path='/edit'><ToDoEditForm/></Route>
      <Route path='/sign-up'><Signup/></Route>
      <Route path='/login'><Login/></Route>
      <PrivateRoute path="/">
        <ToDoItems/>
      </PrivateRoute>


    </div>
  );
}

export default App;