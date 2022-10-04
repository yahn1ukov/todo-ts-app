import { LoginResponse, ErrorResponse } from '../types/response'

export enum AuthenticationActionTypes {
    AUTHENTICATION_FETCHING = 'AUTHENTICATION_FETCHING',
    AUTHENTICATION_FETCHED = 'AUTHENTICATION_FETCHED',
    AUTHENTICATION_FETCHING_ERROR = 'AUTHENTICATION_FETCHING_ERROR'
}

interface AuthenticationFetchingAction {
    type: AuthenticationActionTypes.AUTHENTICATION_FETCHING;
}

interface AuthenticationFetchedAction {
    type: AuthenticationActionTypes.AUTHENTICATION_FETCHED;
    payload: LoginResponse;
}

interface AuthenticationFetchingErrorAction {
    type: AuthenticationActionTypes.AUTHENTICATION_FETCHING_ERROR;
    payload: ErrorResponse;
}

export type AuthenticationAction = AuthenticationFetchingAction | AuthenticationFetchedAction | AuthenticationFetchingErrorAction;
