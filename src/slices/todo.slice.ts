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
        }
    }
});

const { actions, reducer } = todoSlice;

export { reducer };
export const {
    todoFetching,
    todoFetchedSuccess,
    todoFetchedError
} = actions;
