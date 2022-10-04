import { ErrorResponse } from './error';

export interface UserResponse {
    username: string;
}

export interface UserState {
    user: UserResponse | null;
    loading: boolean;
    error: ErrorResponse | null;
}
