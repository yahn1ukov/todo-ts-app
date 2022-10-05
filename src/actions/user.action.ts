import { Dispatch } from "redux";
import { userFetching, userFetchedSuccess, userFetchedError } from '../slices/user.slice';
import { ErrorResponse } from "../types/error";
import { UserResponse } from '../types/user';

export const fetchUser = (request: any, token: string) => async (dispatch: Dispatch) => {
    dispatch(userFetching());
    await request('https://localhost:7066/api/users', 'GET', null, {
        Authorization: `Bearer ${token}`
    })
        .then((data: UserResponse) => dispatch(userFetchedSuccess(data)))
        .catch((error: ErrorResponse) => dispatch(userFetchedError(error)))
}
