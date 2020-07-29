import React, { useEffect, useState } from 'react';
import {axiosWithAuth as Axios} from '../utils';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components'

import ToDoEditForm from './ToDoEditForm';
import ToDoAddForm from './ToDoAddForm';
import ToDo from './ToDo'
// import ToDoSearchBar from './ToDoSearchBar'

import { 
  toggleAdding,
  


} 
  from '../actions';

let taskDisplay = true

const TaskStyled = styled.div`
  display: ${() => taskDisplay ? "block" : "none"};
`





function ToDoList(props) {
  const [list, setList] = useState([])
  
  let history = useHistory();

  const addToDo = (e) => {
    e.preventDefault();
    props.toggleAdding(props);
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
useEffect(() => {
  
  Axios().get('https://wunderlist2backend.herokuapp.com/api/users/1/lists/1/todos')
    .then(res => {
      console.log(res.data);
      setList(res.data)
    })
    .catch()

}, [])

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
  );
};

const mapStateToProps = state => {
  return {
    isAdding: state.isAdding,
    
    
  };
};

export default connect(
  mapStateToProps, 
  { 
  toggleAdding,
  
  
})(ToDoList);