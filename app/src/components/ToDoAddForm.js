import React, { useState } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios'

// const initialFormState = {
//   task: '',
//   description: '',
// }


function ToDoAddForm() {

  // const [toDos, setToDos] = useState([])
  // const [formValues, setFormValues] = useState(initialFormState)

  // const getToDos = () => {
  //   axios.get(toDosURL)
  //     .then(response => {
  //       setToDos(response.data)
  //     })
  //     .catch(handleError)
  // }

  // const postToDo = ({ task, description }) => {
  //   axios.post(toDosURL, { task, description })
  //     .then(res => setToDos(toDos.concat(res.data)))
  //     .catch(handleError)
  //     .finally(resetForm)
  // }

  // const putToDo = ({ id, task, description }) => {
  //   axios.put(`${toDosURL}/${id}`, { task, description })
  //     .then(res => {
  //       setToDos(toDos.map(toDo => {
  //         return toDo.id === id ? res.data : toDo
  //       }))
  //     })
  //     .catch(handleError)
  //     .finally(resetForm)
  // }

  // const deleteToDo = (id) => {
  //   axios.delete(`${toDosURL}/${id}`)
  //     .then(res => {
  //       setToDos(toDos.filter(toDo => toDo.id !== id))
  //     })
  //     .catch(handleError)
  //     .finally(resetForm)
  // }

  // const editToDo = (id) => {
  //   const toDo = toDos.find(t => t.id === id)
  //   setFormValues({ ...toDo })
  // }

  // const handleError = err => { debugger }

  // const resetForm = () => setFormValues(initialFormState)

  // useEffect(() => getToDos(), [])


  return (
    <form>
      <h3>Tasks</h3>
      <div id='task-container'>
        <input
          name='task'
          type='text'
          // value={values.task}
          // onChange={onChange}
          placeholder='Enter a Task'
        />
        <input
          name='description'
          type='text'
          // value={values.description}
          // onChange={onChange}
          placeholder='Enter the Description'
        />
      </div>
      <button id='submitBtn'>Submit</button>
      <button id='cancelBtn'>Cancel</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(
  mapStateToProps,
  {}
)(ToDoAddForm);
