import { axiosWithAuth } from '../utils';

export const FETCH_TODO = 'FETCH_TODO';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_FAILURE = 'FETCH_TODO_FAILURE';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';
export const EDIT_TODO = 'EDIT_TODO';
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS';
export const EDIT_TODO_FAILURE = 'EDIT_TODO_FAILURE';


export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';




export const fetchToDo = () => {
    // I'm going to show one of you how to do this, you'll need a GET request for MVP.
};

export const removeToDo = () => {
    return dispatch => {
      dispatch({ type: DELETE_TODO});
      axiosWithAuth()
        .delete('')
        .then(res => {
          // dispatch({ type: DELETE_TODO_SUCCESS, payload: res.data});
        })
        .catch(err => {
          console.log(err);
          // dispatch({ type: DELETE_TODO_FAILURE, payload: err.data });
      });
  };
};

export const addToDo = () => {
  return dispatch => {
    dispatch({ type: ADD_TODO});
    axiosWithAuth()
      .post('')
      .then(res => {
        console.log(res);
        // dispatch({ type: ADD_TODO_SUCCESS, payload: res.data});
      })
      .catch(err => {
        console.log(err);
        // dispatch({ type: ADD_TODO_FAILURE, payload: err.data });
    });
  };
};

export const editToDo = () => {
  return dispatch => {
    dispatch({ type: EDIT_TODO});
    axiosWithAuth()
      .put('')
      .then(res => {
        console.log(res);
        // dispatch({ type: EDIT_TODO_SUCCESS, payload: res.data});
      })
      .catch(err => {
        console.log(err);
        // dispatch({ type: EDIT_TODO_FAILURE, payload: err.data });
    });
  };
};

export const toggleActive = () => {
  return { type: TOGGLE_ACTIVE }
};