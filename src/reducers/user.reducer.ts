import { UserState } from "../types/user";
import { UserAction, UserActionTypes } from "../actions/user.action";

const initialState: UserState = {
    user: null,
    loading: false,
    error: null
}

const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.USER_FETCHING:
            return {
                ...state,
                loading: true
            }
        case UserActionTypes.USER_FETCHED:
            return {
                ...state,
                loading: false,
                user: action.payload,
            }
        case UserActionTypes.USER_FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer;
