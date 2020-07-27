import React from 'react';
import { connect } from 'react-redux';


function ToDoList() {
  return (
    <div className="ToDoList">
      <span>lol</span>
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
