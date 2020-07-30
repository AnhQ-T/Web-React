import React, { useState } from 'react';
import { connect } from 'react-redux';
import { 
  editToDoList,
  
} 
  from '../actions';


const ListEditForm = props => {
    console.log(props)
    const [list, setList] = useState(props.list);

    const changeHandler = ev => {
      const value = ev.target.value;
      console.log(value)
      setList(value)
    };

    const handleSubmit = e => {
      e.preventDefault();
      props.editToDoList({ listname: list}, props.id)
      props.setIsEditing(false)
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="list"
            onChange={changeHandler}
            value={list}
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
)(ListEditForm);
  