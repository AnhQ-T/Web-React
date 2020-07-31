import {
    EDIT_TODO,
    ACTION_SUCCESS,
    ACTION_FAILURE,
    TOGGLE_EDITING,
    DELETE_TODO,
    CLEAR_ERROR,
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
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
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