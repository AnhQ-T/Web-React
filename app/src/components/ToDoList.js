import React, {useState} from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import ToDo from './ToDo'

function ToDoList() {
  const [toDoList, setToDoList] = useState([])
  Axios.get('https://wunderlist2backend.herokuapp.com/')
    .then(res => {
      console.log(res.data);
      setToDoList(res)
    })
    .catch()
  return (
    <div className="ToDoList">
      {
        toDoList.map( task => {
          return (
            <ToDo task={task}/>
          )
        })
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(
  mapStateToProps, 
  {  }
)(ToDoList);
