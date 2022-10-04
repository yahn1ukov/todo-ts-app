export interface UserResponse {
    username: string;
}

export interface TodoResponse {
    id: string;
    text: string;
    date: Date;
}

export interface ErrorResponse {
    code: number;
    message: string;
    timestamp: Date;
}

export interface LoginResponse {
    token: string;
}

export type BodyResponse = UserResponse | TodoResponse | LoginResponse | ErrorResponse;
