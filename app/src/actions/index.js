import { axiosWithAuth } from '../utils';
import { useHistory } from 'react-router-dom';

export const FETCH_TODO_LISTS = 'FETCH_TODO_LISTS';
export const DELETE_TODO_LISTS = 'DELETE_TODO_LISTS';
export const ADD_TODO_LISTS = 'ADD_TODO_LISTS';
export const EDIT_TODO_LISTS = 'EDIT_TODO_LISTS';
export const FETCH_TODO = 'FETCH_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const ACTION_SUCCESS = 'ACTION_SUCCESS';
export const ACTION_FAILURE = 'ACTION_FAILURE';

export const INPUT_CHANGE = 'INPUT_CHANGE';
export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const TOGGLE_ADDING = 'TOGGLE_ADDING';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const addUser = ( credentials ) => {
  
  return dispatch => {

    console.log(credentials, 'Action from Credentials');
    dispatch({ type: ADD_USER});
    axiosWithAuth()
      .post('/register', credentials)
      .then(res => {
        console.log(res);
        dispatch({ type: ACTION_SUCCESS, payload: res.data});
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ACTION_FAILURE, payload: err.data });
    });
  };
};

export const loginUser = ( credentials ) => {
  return dispatch => {

    console.log(credentials, 'Action from Credentials');
    dispatch({ type: LOGIN_USER });
    axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('token', res.data.token);
        dispatch({ type: ACTION_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ACTION_FAILURE });
    });
  };
};

export const deleteToDoLists = ( listID ) => {
    return dispatch => {
      dispatch({ type: DELETE_TODO_LISTS });
      axiosWithAuth()
        .delete(`/users/${localStorage.getItem('id')}/lists/${listID}`)
        .then(res => {
          console.log(res, 'server response from delete')
          dispatch({ type: ACTION_SUCCESS });
          dispatch({ type: ADD_TODO_LISTS })
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: ACTION_FAILURE, payload: err.data });
      });
  };
};

export const deleteToDo = ( listID, toDoID )  => {
  return dispatch => {
    dispatch({ type: DELETE_TODO});
    axiosWithAuth()
      .delete(`/users/${localStorage.getItem('id')}/lists/${listID}/todos/${toDoID}`)
      .then(res => {
        console.log(res, 'server response from delete')
        dispatch({ type: ACTION_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ACTION_FAILURE, payload: err.data });
    });
};
};

export const addToDoList = ( body ) => {
  return dispatch => {
    dispatch({ type: ADD_TODO_LISTS });
    axiosWithAuth()
      .post(`/users/${localStorage.getItem('id')}/lists`, body)
      .then(res => {
        console.log(res);
        dispatch({ type: ACTION_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ACTION_FAILURE, payload: err.data });
    });
  };
};

export const addToDo = ( body, listID ) => {
  return dispatch => {
    dispatch({ type: ADD_TODO });
    axiosWithAuth()
      .post(`/users/${localStorage.getItem('id')}/lists/${listID}/todos`, body)
      .then(res => {
        console.log(res);
        dispatch({ type: ADD_TODO_LISTS })
        dispatch({ type: ACTION_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ACTION_FAILURE, payload: err.data });
    });
  };
};

export const editToDoList = ( body ) => {
  return dispatch => {
    dispatch({ type: EDIT_TODO_LISTS });
    axiosWithAuth()
      .put(`/users/${localStorage.getItem('id')}/lists/${body.id}`, body)
      .then(res => {
        console.log(res);
        dispatch({ type: ACTION_SUCCESS, payload: res.data});
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ACTION_FAILURE, payload: err.data });
    });
  };
};

export const editToDo = ( body, listID, toDoID ) => {
  return dispatch => {
    dispatch({ type: EDIT_TODO});
    axiosWithAuth()
      .put(`/users/${localStorage.getItem('id')}/lists/${listID}/todos/${toDoID}`, body)
      .then(res => {
        console.log(res);
        dispatch({ type: ACTION_SUCCESS, payload: res.data});
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ACTION_FAILURE, payload: err.data });
    });
  };
};

export const inputChange = () => {
  return { type: INPUT_CHANGE}
};

export const toggleAdding = () => {
  return { type: TOGGLE_ADDING }
};

export const toggleEditing = () => {
  return { type: TOGGLE_EDITING }
};

export const toggleCompleted = () => {
  return { type: TOGGLE_COMPLETED }
};