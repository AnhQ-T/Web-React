import React from 'react';
import {Link, Route} from 'react-router-dom'
import Signin from './components/Signin'
import Login from './components/Login'
import './App.css';
import {Link, Route} from 'react-router-dom'

import ToDoAddForm from './components/ToDoAddForm'
import ToDoEditForm from './components/ToDoEditForm'

function App() {
  return (
    <div className="App">

      <Link to='/add'>Add</Link>
      <Link to='/edit'>Edit</Link>

      <Route path='/add'><ToDoAddForm/></Route>
      <Route path='/edit'><ToDoEditForm/></Route>

      <Link to='/sign-up'>Sign-Up</Link>
      <Link to='/login'>Login</Link>
      
      <Route path='/sign-up'><Signin/></Route>
      <Route path='/login'><Login/></Route>

    </div>
  );
}

export default App;
