import {
    ADD_USER,
    LOGIN_USER,
    EDIT_TODO,
    ACTION_SUCCESS,
    ACTION_FAILURE,
    TOGGLE_EDITING,
    DELETE_TODO
} from '../actions';


const initialState = {
    username: '',
    password: '',
    task: '',
    redirect: false,
    isEditing: false,
    error: '',
};

export const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_USER :
            return {
                ...state,
            };
        case LOGIN_USER :
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
            }
        case ACTION_SUCCESS :
            return {
                ...state,
                error: '',
                redirect: !state.redirect
            };
        case ACTION_FAILURE :
            return {
                ...state,
                error: action.payload,
            };
        case TOGGLE_EDITING :
            return {
                ...state,
                isEditing: !state.isEditing,
            };
        default :
            return state;
    };
};