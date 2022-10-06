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
        todoSortedByAsc: (state, action) => {
            state.loading = false;
            state.todo = action.payload;
            state.error = null;
        },
        todoSortedByDesc: (state, action) => {
            state.loading = false;
            state.todo = action.payload;
            state.error = null;
        },
        todoFetchedError: (state, action) => {
            state.loading = false;
            state.todo = [];
            state.error = action.payload;
        },
        todoCreated: (state, action) => {
            state.todo.push(action.payload);
        },
        todoEdited: (state, action) => {
            state.todo = state.todo.map(t => {
                if (t.id === action.payload.id) {
                    return {
                        ...t,
                        text: action.payload.text,
                        isEdited: action.payload.isEdited
                    }
                }
                return t;
            });
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
    todoSortedByAsc,
    todoSortedByDesc,
    todoCreated,
    todoEdited,
    todoDeleted
} = actions;
