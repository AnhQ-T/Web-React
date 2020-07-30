import { axiosWithAuth } from '../utils';

// Actions
export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const ACTION_SUCCESS = 'ACTION_SUCCESS';
export const ACTION_FAILURE = 'ACTION_FAILURE';
export const TOGGLE_EDITING = 'TOGGLE_EDITING';

// LOGGERS
export const DELETE_TODO = 'DELETE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export const addUser = ( credentials ) => {
  
  return dispatch => {

    // console.log(credentials, 'Action from Credentials');
    dispatch({ type: ADD_USER});
    axiosWithAuth()
      .post('/register', credentials)
      .then(res => {
        // console.log(res);
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

    // console.log(credentials, 'Action from Credentials');
    dispatch({ type: LOGIN_USER });
    axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
        // console.log(res);
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('token', res.data.token);
        dispatch({ type: ACTION_SUCCESS });
      })
      .catch(err => {
        // console.log(err);
        dispatch({ type: ACTION_FAILURE });
    });
  };
};


export const deleteToDoLists = ( listID ) => {
    return dispatch => {
      axiosWithAuth()
        .delete(`/users/${localStorage.getItem('id')}/lists/${listID}`)
        .then(res => {
          // console.log(res, 'server response from delete')
          dispatch({ type: ACTION_SUCCESS });
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
        // console.log(res)
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
    axiosWithAuth()
      .post(`/users/${localStorage.getItem('id')}/lists`, body)
      .then(res => {
        // console.log(res);
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
        // console.log(res);
        dispatch({ type: ACTION_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ACTION_FAILURE, payload: err.data });
    });
  };
};


export const editToDoList = ( body, id ) => {
  return dispatch => {
    console.log(body)
    axiosWithAuth()
      .put(`/users/${localStorage.getItem('id')}/lists/${id}`, body)
      .then(res => {
        // console.log(res);
        dispatch({ type: ACTION_SUCCESS});
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ACTION_FAILURE, payload: err.data });
    });
  };
};


export const editToDo = ( body, listID, toDoID ) => {
  const newToDo = {
    todo: body
  };
  return dispatch => {
    dispatch({ type: EDIT_TODO});
    axiosWithAuth()
      .put(`/users/${localStorage.getItem('id')}/lists/${listID}/todos/${toDoID}`, newToDo)
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


export const toggleEditing = () => {
  return { type: TOGGLE_EDITING }
};
