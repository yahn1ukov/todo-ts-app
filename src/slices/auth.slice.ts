import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../types/auth";

const initialState: AuthState = {
    loading: false,
    error: null
}

export const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        authFetching: state => {
            state.loading = true;
            state.error = null;
        },
        authFetchedSuccess: state => {
            state.loading = false;
            state.error = null;
        },
        authFetchedError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

const { actions, reducer } = authSlice;

export { reducer };
export const {
    authFetching,
    authFetchedSuccess,
    authFetchedError,
} = actions;
