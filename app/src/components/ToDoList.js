import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'


import { 


} 
  from '../actions';

function ToDoSearchBar() {

  const [data, setData] = useState([])


  return (
    <div className="ToDoSearchBar">
      <input
        type='text'
        value={this.data.searchTerm}
        onChange={this.editSearchTerm}
        placeholder='Search your task'
      />
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
