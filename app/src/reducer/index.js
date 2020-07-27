import {
    FETCH_TODO,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE,
    DELETE_TODO,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAILURE,
    ADD_TODO,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    EDIT_TODO,
    EDIT_TODO_SUCCESS,
    EDIT_TODO_FAILURE,
    TOGGLE_ACTIVE,
} from '../actions';

const initialState = {
    isLoading: false,
    active: false,
    data: [],
    error: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODO :
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_TODO_SUCCESS :
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: '',
            };
        case FETCH_TODO_FAILURE :
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case TOGGLE_ACTIVE :
            return {
                ...state,
                active: !state.active,
            };
        default :
            return state;
    };
};