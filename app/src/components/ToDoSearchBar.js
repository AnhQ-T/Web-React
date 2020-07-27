import React from 'react';
import { connect } from 'react-redux';


function ToDoSearchBar() {
  return (
    <div className="ToDoSearchBar">
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
)(ToDoSearchBar);
