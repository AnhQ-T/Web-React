import React from 'react';
import {Link, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Link to='/signup'>Sign-Up</Link>
      <Link to='/login'>Login</Link>
      
      <Route path='/signup'><Signup/></Route>
      <Route path='/login'><Login/></Route>
      <PrivateRoute
        exact path='/'
        component={ToDoList}
      />
    </div>
  );
}

export default App;