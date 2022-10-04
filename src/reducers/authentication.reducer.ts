import { AuthenticationState } from '../types/authentication';
import { AuthenticationAction, AuthenticationActionTypes } from '../actions/authentication.action';

const initialState: AuthenticationState = {
    user: null,
    loading: false,
    error: null
}

export const authentication = (state = initialState, action: AuthenticationAction): AuthenticationState => {
    switch (action.type) {
        case AuthenticationActionTypes.AUTHENTICATION_FETCHING:
            return {
                loading: true,
                user: null,
                error: null
            }
        case AuthenticationActionTypes.AUTHENTICATION_FETCHED:
            return {
                loading: false,
                user: action.payload,
                error: null
            }
        case AuthenticationActionTypes.AUTHENTICATION_FETCHING_ERROR:
            return {
                loading: false,
                user: null,
                error: action.payload
            }
        default:
            return state
    }
}
