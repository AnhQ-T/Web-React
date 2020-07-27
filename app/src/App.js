import React from 'react';
import {Link, Route} from 'react-router-dom'
import Signin from './components/Signin'
import Login from './components/Login'
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to='/sign-up'>Sign-Up</Link>
      <Link to='/login'>Login</Link>
      
      <Route path='/sign-up'><Signin/></Route>
      <Route path='/login'><Login/></Route>
    </div>
  );
}

export default App;
