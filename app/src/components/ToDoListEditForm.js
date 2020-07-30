import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from '../utils';
import * as yup from 'yup';
import formSchema from '../validation/formSchemaAndre';
import styled from 'styled-components';
import ToDoList from './ToDoList';
import { 
  editToDoList,
  
} 
  from '../actions';


import axios from "axios";
  
  const initialList = {
    listname: '',
  };
  
const ToDoListEditForm = props => {
    
    const [list, setList] = useState(initialList);
  
    const userID = localStorage.getItem('id');
    const location = useLocation();
    
    useEffect(() => {
      if (location.state) {
        setList(location.state);
      } else {
        axiosWithAuth()
          .get(`/users/${userID}/lists`)
          .then(res => setList(res.data))
          .catch(err => console.log(err));
      }
    }, [  ]);
  
    const changeHandler = ev => {
      ev.persist();
      const value = ev.target.value;
      setlist({
        ...list,
        [ev.target.name]: value
      });
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      props.editToDoList(list)
    };
  
    return (
      <div>
        <h2>Edit List</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={changeHandler}
            placeholder="name"
            value={list.name}
          />
  
          <button type='submit'>Edit</button>
        </form>
      </div>
    );
};

const mapStateToProps = state => {
    return {
        addedList: state.addedList,

    };
};
  
export default connect(
    mapStateToProps, 
    { 
        editToDoList,
    }
)(ToDoListEditForm);
  