import React, { useState } from 'react';
import { connect } from 'react-redux';
import { 
  editToDoList,
  
} 
  from '../actions';


const ListEditForm = props => {
    
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
      props.setIsEditing(false)
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
)(ListEditForm);
  