import React, { useEffect, useState } from 'react';
import { axiosWithAuth as Axios} from '../utils';
import { connect } from 'react-redux';
import styled from 'styled-components'
import ToDoList from './ToDoList';
import { 
  addToDoList,

} 
  from '../actions';

  const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
    #new-list{
      width: 5%;
      color: white;
      border: none;
      padding: 0.5%;
      border-radius: 5px;
      background: #7cae7a;
      margin-top: 1%;
      &:hover{
        cursor: pointer;
        background:#E3E3E3;
        border: 2px solid #E3E3E3;
        color: green;
      }
    }
  `
  const BigListConatiner = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
  
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
    <DashboardContainer>
      <button id="new-list" onClick={addList}>+List</button>     
      <BigListConatiner>
      {
        list.map(( list ) => {
          return (
            <>
              <ToDoList key={list.id} list={list}/>
            </>
          )
        })
      }
      </BigListConatiner>
    </DashboardContainer>
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