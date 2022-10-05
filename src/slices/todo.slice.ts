import { createSlice } from "@reduxjs/toolkit";
import { TodoState } from "../types/todo";

const initialState: TodoState = {
    todo: [],
    loading: false,
    error: null
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todoFetching: state => {
            state.loading = true;
            state.todo = [];
            state.error = null;
        },
        todoFetchedSuccess: (state, action) => {
            state.loading = false;
            state.todo = action.payload;
            state.error = null;
        },
        todoFetchedError: (state, action) => {
            state.loading = false;
            state.todo = [];
            state.error = action.payload;
        },
        todoSortedByDesc: (state, action) => {
            state.loading = false;
            state.todo = action.payload.reverse();
            state.error = null;
        },
        todoSearched: (state, aciton) => {

        },
        todoCreated: (state, action) => {
            state.todo.push(action.payload);
        },
        todoEdited: (state, action) => {
            state.todo = [
                ...state.todo,
                state.todo.find(t => t.id === action.payload.id)!.text = action.payload.text,
                state.todo.find(t => t.id === action.payload.id)!.isEdited = action.payload.isEdited
            ];
        },
        todoDeleted: (state, action) => {
            state.todo = state.todo.filter(t => t.id !== action.payload);
        }
    }
});

const { actions, reducer } = todoSlice;

export { reducer };
export const {
    todoFetching,
    todoFetchedSuccess,
    todoFetchedError,
    todoSortedByDesc,
    todoSearched,
    todoCreated,
    todoEdited,
    todoDeleted
} = actions;
