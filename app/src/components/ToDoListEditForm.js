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
    
    const [list, setList] = useState(props.list);

    const changeHandler = ev => {
      ev.persist();
      const value = ev.target.value;
      setList({
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={changeHandler}
            placeholder="name"
            value={props.list}
          />
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
  