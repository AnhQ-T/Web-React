import React from 'react';
import logo from './logo.svg';
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
    </div>
  );
}

export default App;
