import React from 'react';
import { connect } from 'react-redux';


function ToDoAddForm() {
  return (
    <div className="ToDoAdd">
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
)(ToDoAddForm);
