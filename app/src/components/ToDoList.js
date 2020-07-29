import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components'

import ToDoEditForm from './ToDoEditForm';
import ToDoAddForm from './ToDoAddForm';
import ToDo from './ToDo'
import { 
  toggleAdding,
  


} 
  from '../actions';
import ToDo from './ToDo';

function ToDoList() {
  const [data, setData] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get(``)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
  })

  return (
      <div className="ToDoList">
        <button onClick={addToDo}>add</button>
        {
          list.map( task => {
            return (
              <ToDo key={task.id} task={task}/>

            )
          })
        }
      </div>
    )
};

const mapStateToProps = state => {
  return {
    
  };
};

export default connect(
  mapStateToProps, 
  {  }
)(ToDoDashboard);
