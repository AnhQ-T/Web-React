import React, { useEffect, useState } from 'react';
import { axiosWithAuth as Axios} from '../utils';
import { connect } from 'react-redux';
import ToDoList from './ToDoList';
import { 
  addToDoList,

} 
  from '../actions';


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
        console.log(res);
        setList(res.data);
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [props.redirect])


  return (
    <div className="dashboard">
      <h1>Wunderlist</h1>
      <button onClick={addList}>New List</button>
      {
        list.map(( list ) => {
          console.log(list)
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