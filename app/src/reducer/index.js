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


const initialState = {
    username: '',
    password: '',
    task: '',
    description: '',
    isLoading: false,
    isAdding: false,
    isEditing: false,
    isCompleted: false,
    data: [],
    error: '',
};

export const reducer = (state = initialState, action) => {
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
        case FETCH_TODO :
            return {
                ...state,
                isLoading: true,
            };
        case ADD_TODO :
            return {
                ...state,
                isAdding: false,
            };
        case EDIT_TODO :
            return {
                ...state,
                isEditing: false,
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