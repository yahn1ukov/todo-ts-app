import { AuthenticationAction, AuthenticationActionTypes } from '../authentication.action';
import { Dispatch } from 'react'
import { LoginRequest } from '../../types/request';
import { LoginResponse, ErrorResponse } from '../../types/response';

export const fetchAuthentication = (request: any, values: LoginRequest) => async (dispatch: Dispatch<AuthenticationAction>) => {
    dispatch({ type: AuthenticationActionTypes.AUTHENTICATION_FETCHING });
    await request('https://localhost:7066/api/authentication/login', 'POST', values)
        .then((data: LoginResponse) => dispatch({ type: AuthenticationActionTypes.AUTHENTICATION_FETCHED, payload: data }))
        .catch((error: ErrorResponse) => dispatch({ type: AuthenticationActionTypes.AUTHENTICATION_FETCHING_ERROR, payload: error }))
}
