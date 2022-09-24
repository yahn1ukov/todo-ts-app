export interface GetTodoResponse {
    id: string,
    text: string,
    date: Date
}

export interface CreateTodoRequest {
    text: string
}

export interface UpdateTodoRequest {
    text: string
}

export interface GetUserResponse {
    username: string
}

export interface LoginRequest {
    username: string,
    password: string
}

export interface LoginResponse {
    token: string
}

export interface ErrorResponse {
    code: number,
    message: string,
    timestamp: Date
}

export interface AuthenticationContext {
    token: string|null,
    login: (token: string) => void,
    logout: () => void,
    isAuth: boolean
}

export type BodyRequest = CreateTodoRequest|UpdateTodoRequest|LoginRequest;

export type BodyResponse = GetTodoResponse|GetUserResponse|LoginResponse|ErrorResponse;