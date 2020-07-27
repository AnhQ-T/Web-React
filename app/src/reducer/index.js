import {
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
    isLoading: false,
    isAdding: false,
    isEditing: false,
    isCompleted: false,
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