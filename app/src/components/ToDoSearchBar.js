import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'



function ToDoSearchBar() {

  const [data, setData] = useState([])

  useEffect(() => {

    axios.get('https://wunderlist2backend.herokuapp.com/')

      .then(res => {
        setData(res.data)
        console.log('hi', res.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [searchTerm])

  editSearchTerm = (e) => [
    this.setData({ data: e.target.value })
  ]

  dynamicSearch = () => {
    return this.data.filter(data.includes(this.data.searchTerm))
  }

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
  {}
)(ToDoSearchBar);
