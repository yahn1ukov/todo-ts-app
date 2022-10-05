import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../types/user";

const initialState: UserState = {
    user: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userFetching: state => {
            state.loading = true;
            state.user = null;
            state.error = null;
        },
        userFetchedSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        },
        userFetchedError: (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.payload;
        }
    }
})

const { actions, reducer } = userSlice;

export { reducer };
export const {
    userFetching,
    userFetchedSuccess,
    userFetchedError
} = actions;
