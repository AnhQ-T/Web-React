import React, { useEffect, useState } from 'react';
import { axiosWithAuth as Axios} from '../utils';
import { connect } from 'react-redux';
import styled from 'styled-components'
import ToDoList from './ToDoList';
import { 
  addToDoList,

} 
  from '../actions';

const ListContainer = styled.div`

  display: flex;
  flex-direction: column;
  background: white;
  flex-wrap: wrap;
  color: black;
  border-radius: 10px;
  padding: 5%;
  align-items: center;
  #top{
    display: flex;
    align-items: center;
    & h2 {
      width: 85%;
      text-align: center;
    }
    & button {
      border: none;
      background: none;
      color: red;
      padding: 3%;
      &:hover{
        cursor: pointer;
      }
    }
  }
  #newTaskBtn{
    width: 40%;
    color: green;
    border: none;
    padding: 4%;
    border-radius: 5px; 
    border-right: 2px solid 
    
  }
` 

function Dashboard (props) {
  const [list, setList] = useState([]);

  const newList = {listname: 'New List'}

  const addList = (e) => {
    e.preventDefault();
    props.addToDoList(newList);
  };

  const userID = localStorage.getItem('id');

  useEffect(() => {
    Axios().get(`/users/${userID}/lists`)
      .then(res => {
        setList(res.data);
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [props.redirect])


  return (
    <div>
      <h1>Wunderlist</h1>
      <button onClick={addList}>New List</button>
      <ListContainer>
        <div id="top">
          <h2>List name</h2>
          <button id="removeList">X</button>
        </div>
          <button id="newTaskBtn">+Task</button>
        <div>
          <div>Get Bannanas</div>
        </div>

      </ListContainer>
      <button onClick={addList}>Add a New List</button>
      {
        list.map(( list ) => {
          return (
            <>
              <ToDoList key={list.id} list={list}/>
            </>
          )
        })
      }
    </div>
  );
};

const mapStateToProps = state => {

  return {
    redirect: state.redirect,

  };
};

export default connect(
  mapStateToProps, 
  { 
  addToDoList,
  
  
})(Dashboard);