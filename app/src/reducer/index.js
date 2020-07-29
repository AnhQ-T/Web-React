import {
    ADD_USER,
    LOGIN_USER,
    FETCH_TODO_LISTS,
    ADD_TODO_LISTS,
    EDIT_TODO_LISTS,
    DELETE_TODO_LISTS,
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


const initialState = {
    username: '',
    password: '',
    task: {
        task: '',
        description: '',
        completed: false,
    },
    isLoading: false,
    isAdding: false,
    isEditing: false,
    userID: '',
    ToDoID: '',
    data: [],
    error: '',
};

export const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_USER :
            return {
                ...state,
                data: action.payload,
            };
        case LOGIN_USER :
            return {
                ...state,
                data: action.payload,

            };
        case FETCH_TODO_LISTS :
            return {
                ...state,
                isLoading: true,

            };
        case ADD_TODO_LISTS :
            return {
                ...state,
                isAdding: false,
            };
        case EDIT_TODO_LISTS :
            return {
                ...state,
                isEditing: false,
            };
        case DELETE_TODO_LISTS :
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
                task: {
                    task: state.task,
                    description: state.description,
                    completed: state.completed,
                }
            };
        default :
            return state;
    };
};