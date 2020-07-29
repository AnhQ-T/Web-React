import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils';
import { 


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
      {/* {
        list.map( task => {
          return (
            <>
            <ToDo/>
            </>
          )
        })
      } */}
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
)(ToDoDashboard);
