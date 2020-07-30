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
    isEditingList: false,
    deletedList: false,
    addedList: false,
    editedList: false,
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
        case FETCH_TODO :
            return {
                ...state,
                data: action.payload,

            };
        case EDIT_TODO :
            return {
                ...state,
                isEditing: false,

            };
        case FETCH_TODO_LISTS :
            return {
                ...state,
                isLoading: true,

            };
        case DELETE_TODO_LISTS :
            return {
                ...state,
                addedList: !state.addedList,
            };
        case ADD_TODO_LISTS :
            return {
                ...state,
                addedList: !state.addedList
            };
        case EDIT_TODO_LISTS :
            return {
                ...state,
                isEditingList: false,
                addedList: !state.addedList,
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