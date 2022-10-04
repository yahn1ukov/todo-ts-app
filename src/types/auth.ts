import { ErrorResponse } from "./error";

export interface AuthRequest {
    username: string;
    password: string;
}

export interface AuthResponse {
    token: string;
}

export interface AuthContext {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
    isAuth: boolean;
}

export interface AuthState {
    loading: boolean;
    error: ErrorResponse | null;
}
