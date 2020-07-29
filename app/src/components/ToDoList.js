import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { axiosWithAuth } from '../utils';
import { 
  toggleAdding,
  } 
  from '../actions';
=======
import { useHistory } from 'react-router-dom';

import styled from 'styled-components'

import ToDoEditForm from './ToDoEditForm';
import ToDoAddForm from './ToDoAddForm';
import ToDo from './ToDo'

import { 
  toggleAdding,
  




import ToDo from './ToDo';

function ToDoList() {
  const [data, setData] = useState([])
  
  const addToDo = (e) => {
    e.preventDefault();
    props.toggleAdding(props);
  };

  useEffect(() => {
    axiosWithAuth()
      .get(``)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
  })

// useEffect( () => {
  //   if (toggleEditing === true){
  //     history.push('/edit');
  //   };
    

  // }, [props.isEditing]);

  // useEffect( () => {
  //   if (toggleAdding === true){
  //     history.push('/add');
  //   };

  // }, [props.isAdding]);

  return (
    <div className="ToDoList">
//       {{
//         list.map( task => {
//           return (
//             <>
//             <ToDo/>
//             </>
//           )
//         })
//       }}
    </div>
  );
};

const mapStateToProps = state => {
  return {

    isAdding: state.isAdding,
    
    

    };
};

export default connect(
  mapStateToProps, 
  {  }
)(ToDoDashboard);