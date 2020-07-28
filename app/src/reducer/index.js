import {
    ADD_USER,
    LOGIN_USER,
    FETCH_TODO,
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    ACTION_SUCCESS,
    ACTION_FAILURE,
    TOGGLE_ADDING,
    TOGGLE_EDITING,
    TOGGLE_COMPLETED,
} from '../actions';

const initialFormValues = {
    username: '',
    password: '',
  };
  

const initialState = {
    formValues: initialFormValues,
    formErrors: initialFormValues,
    credentials: initialFormValues,
    isLoading: false,
    isAdding: false,
    isEditing: false,
    isCompleted: false,
    data: [],
    error: '',
};

export const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_USER :
            return {
                ...state,
                credentials: action.payload,
            };
        case LOGIN_USER :
            return {
                ...state,
                credentials: action.payload,
            };
        case FETCH_TODO :
            return {
                ...state,
                isLoading: true,
            };
        case ADD_TODO :
            return {
                ...state,
               
            };
        case EDIT_TODO :
            return {
                ...state,
                
            };
        case DELETE_TODO :
            return {
                ...state,
                
            };
        case ACTION_SUCCESS :
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: '',
            };
        case ACTION_FAILURE :
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case TOGGLE_ADDING :
            return {
                ...state,
                isAdding: !state.isAdding,
            };
        case TOGGLE_EDITING :
            return {
                ...state,
                isEditing: !state.isEditing,
            };
        case TOGGLE_COMPLETED :
            return {
                ...state,
                isCompleted: !state.isCompleted,
            };
        default :
            return state;
    };
};