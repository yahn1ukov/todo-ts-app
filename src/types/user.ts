import { UserResponse, ErrorResponse } from './response';

export interface UserState {
    user: UserResponse | null;
    loading: boolean;
    error: ErrorResponse | null;
}
