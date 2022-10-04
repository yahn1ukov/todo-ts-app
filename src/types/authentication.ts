import { ErrorResponse, LoginResponse } from "./response";

export interface AuthenticationState {
    user: LoginResponse | null;
    loading: boolean;
    error: ErrorResponse | null;
}

export interface AuthenticationContext {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
    isAuth: boolean;
}
