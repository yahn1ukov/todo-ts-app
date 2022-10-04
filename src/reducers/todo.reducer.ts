import { TodoAction, TodoActionTypes } from "../actions/todo.action"
import { TodoState } from "../types/todo"

const initialState: TodoState = {
    todo: [],
    loading: false,
    error: null
}

const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.TODO_FETCHING:
            return {
                ...state,
                loading: true
            }
        case TodoActionTypes.TODO_FETCHED:
            return {
                ...state,
                loading: false,
                todo: action.payload
            }
        case TodoActionTypes.TODO_FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default todoReducer;
