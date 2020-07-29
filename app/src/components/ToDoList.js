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
  deleteToDoLists,


} 
  from '../actions';

// const TaskStyled = styled.div`
//   /* display: ${() => taskDisplay ? "block" : "none"}; */
// `



function ToDoList (props) {
  const [data, setData] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get(``)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
  })


  const addToDo = (e) => {
    e.preventDefault();
    props.toggleAdding(props);
  };

  const deleteList = (e) => {
    e.preventDefault();
    props.deleteToDoLists( props.listID );

  };

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
        {/* <button onClick={addToDo}>add</button> */}
        <button onClick={deleteList}>X---X</button>
        {/* {
          list.map( task => {
            return (
              <ToDo key={task.id} task.id={task.id} task={task}/>

            )
          })
        } */}
      </div>
    )
};

const mapStateToProps = state => {
  return {
    
  };
};

export default connect(
  mapStateToProps, 
  { 
    deleteToDoLists,
  }
)(ToDoList);
