import { Dispatch } from "redux";
import { AuthRequest, AuthResponse } from "../types/auth";
import { ErrorResponse } from '../types/error';
import { authFetching, authFetchedSuccess, authFetchedError } from '../slices/auth.slice';

export const fetchAuth = (request: any, login: any, values: AuthRequest) => async (dispatch: Dispatch) => {
    dispatch(authFetching())
    await request('https://localhost:7066/api/authentication/login', 'POST', values)
        .then((data: AuthResponse) => {
            dispatch(authFetchedSuccess());
            login(data.token)
        })
        .catch((error: ErrorResponse) => dispatch(authFetchedError(error)))
}
